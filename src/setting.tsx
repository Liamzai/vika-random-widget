import React, { useState } from "react";
import { FieldPicker, useActiveViewId } from "@vikadata/widget-sdk";

export const Setting: React.FC = () => {
  const viewId = useActiveViewId();
  const [fieldId, setFieldId] = useState<any>();

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
      </div>
      <Setting />
    </div>
  );
};
