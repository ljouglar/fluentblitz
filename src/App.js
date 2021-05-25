import React from 'react';
import './style.css';
import { Stack } from '@fluentui/react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';

export default function App(props) {
  const stackTokens = { childrenGap: 40 };
  const { disabled, checked } = props;

  return (
    <Stack horizontal tokens={stackTokens}>
      <DefaultButton
        text="Standard"
        onClick={_alertClicked}
        allowDisabledFocus
        disabled={disabled}
        checked={checked}
      />
      <PrimaryButton
        text="Primary"
        onClick={_alertClicked}
        allowDisabledFocus
        disabled={disabled}
        checked={checked}
      />
    </Stack>
  );
};

function _alertClicked() {
  alert('Clicked');
}
