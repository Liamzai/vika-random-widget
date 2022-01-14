import { Button } from "@vikadata/components";
import {
  FieldPicker,
  initializeWidget,
  useActiveViewId,
  useDatasheet,
  useRecords,
} from "@vikadata/widget-sdk";
import React, { useEffect, useState } from "react";

let cId: any;
let randomTimes = 10;

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export const randomRecord: React.FC = () => {
  const datasheet = useDatasheet();
  const viewId = useActiveViewId();
  const sourceRecords = useRecords(viewId);
  const [luckyOne, setLuckyOne] = useState<any>();
  const [fieldId, setFieldId] = useState<any>();
  const [fieldCheckId, setFieldCheckId] = useState<any>();
  const [shouldShowFullName, setShouldShowFullName] = useState(false);
  const [lastNameLoding, setLastNameLoading] = useState(false);
  const records = shuffle(sourceRecords).filter((record) =>
    record.getCellValueString(fieldId)
  );

  const memberNames = records.map((record) =>
    record.getCellValueString(fieldId)
  );

  useEffect(() => {
    if (lastNameLoding) {
      cId = setInterval(() => {
        if (randomTimes < 0) {
          clearInterval(cId);
          setLastNameLoading(false);
          return;
        }
        const index = Math.floor(Math.random() * memberNames.length);
        const luckyOne = memberNames[index];
        setLuckyOne(luckyOne);
        randomTimes--;
      }, 200);
    }

    return () => clearInterval(cId);
  }, [shouldShowFullName, lastNameLoding, luckyOne, setLuckyOne]);

  const getRandom = function () {
    if (!lastNameLoding && !luckyOne) return setLastNameLoading(true);
    if (!shouldShowFullName) {
      return setShouldShowFullName(true);
    }
    if (luckyOne) {
      const name = luckyOne;
      const selectedRecordIndex = memberNames.findIndex(
        (item) => item === name
      );
      const selectedRecord = records[selectedRecordIndex];
      const result = datasheet?.checkPermissionsForSetRecord(
        selectedRecord.recordId,
        { [fieldCheckId]: true }
      );
      if (result?.acceptable) {
        datasheet!.setRecord(selectedRecord.recordId, { [fieldCheckId]: true });
      }
      setLuckyOne("");
      randomTimes = 10;
      setShouldShowFullName(false);
      return;
    }
  };
  const showName = shouldShowFullName
    ? luckyOne
    : (luckyOne ? luckyOne.slice(0, 1) : "") + "???";

  if (fieldId && fieldCheckId) {
    return (
      <div
        style={{
          height: "100%",
        }}
      >
        <div
          style={{
            textAlign: "center",
            width: "50%",
            margin: "0 auto",
          }}
        >
          <svg
            style={{
              width: "100%",
              fontSize: "3em",
            }}
            viewBox="0 0 200 200"
          >
            <text
              fill={"#262626"}
              x="100"
              y="100"
              text-anchor="middle"
              dominant-baseline="middle"
            >
              {showName}
            </text>
          </svg>
        </div>
        <div
          style={{
            textAlign: "center",
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Button color="primary" onClick={getRandom} disabled={lastNameLoding}>
            {luckyOne
              ? shouldShowFullName
                ? "确定结果"
                : "到底是谁？"
              : "让我们看看幸运儿姓什么？"}
          </Button>
        </div>
      </div>
    );
  }

  if (!viewId) {
    return null;
  }

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div style={{ flexGrow: 1, overflow: "auto", padding: "0 8px" }}>
        <p>先选择要抽取的人名的一列</p>
        <FieldPicker
          viewId={viewId}
          fieldId={fieldId}
          onChange={(option) => setFieldId(option.value)}
        />
        <p>选择一个「勾选」类型的维格列（标记中奖人）</p>
        <FieldPicker
          viewId={viewId}
          fieldId={fieldCheckId}
          onChange={(option) => setFieldCheckId(option.value)}
        />
      </div>
    </div>
  );
};

initializeWidget(randomRecord, process.env.WIDGET_PACKAGE_ID);
