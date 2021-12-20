import React, { useState } from 'react';
import { FieldPicker, useActiveViewId } from '@vikadata/widget-sdk';

export const FiledSelector: React.FC = ({
  fieldId,
  setFieldId,
}) => {
  const viewId = useActiveViewId();
  
  return <FieldPicker viewId={viewId} fieldId={fieldId} onChange={option => {
    setFieldId(option.value)
  }}/>
}