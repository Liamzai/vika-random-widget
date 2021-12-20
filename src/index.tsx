import React, { useState } from 'react';
import { initializeWidget, useActiveViewId, useRecords } from '@vikadata/widget-sdk';
import { Setting } from './setting';
import { Button } from '@vikadata/components';
import { FiledSelector } from './fieldPicker';

export const randomRecord: React.FC = () => {
  const viewId = useActiveViewId();
  const records = useRecords(viewId);
  const [targetValue, setTargetValue] = useState("");
  const [fieldId, setFieldId] = useState<string | null>()

  const getRandom = function(){
    const index =  Math.floor((Math.random()* records.length )+1);
    const selectedRecord = records[index];
    const cellValue = selectedRecord.getCellValueString(fieldId);
    console.log({fieldId, cellValue})
    setTargetValue(cellValue);
  }

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ flexGrow: 1, overflow: 'auto', padding: '0 8px'}}>
      <p>请选择一列进行抽选</p>
      <FiledSelector
        fieldId={fieldId}
        setFieldId={setFieldId}
      />
      <Button color="primary" onClick={getRandom}> 点击进行抽取 </Button>
      <h3>被抽到的是:{targetValue}</h3>
      </div>
      <Setting />
    </div>
  );
};

initializeWidget(randomRecord, process.env.WIDGET_PACKAGE_ID);

