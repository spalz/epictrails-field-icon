import React, { useState, useRef, FC } from "react";
import IconsModal from "./IconsModal";
import styled from "styled-components";
import {
  Field,
  FieldError,
  FieldHint,
  FieldInput,
  FieldAction,
  FieldLabel,
  Flex,
  Icon,
} from "@strapi/design-system";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";
import { Cross, Search } from "@strapi/icons";

import getTrad from "../../utils/getTrad";
import icons from "./icons";

const IconWraper = styled.div`
  height: 1rem;
  width: 1rem;
  color: ${({ theme }) => theme.colors.neutral900};
  display: flex;
  align-items: center;
`;

interface IconPickerFieldI {
  description: any;
  disabled: boolean;
  error: string;
  intlLabel: any;
  labelAction: any;
  name: string;
  onChange: (e: any) => void;
  required: boolean;
  value: string;
}

const IconPickerField: FC<IconPickerFieldI> = ({
  description = null,
  disabled = false,
  error = null,
  intlLabel = null,
  labelAction = null,
  name = "",
  onChange = () => {},
  required = false,
  value = "",
}) => {
  const { formatMessage } = useIntl();
  const searchbarRef = useRef<HTMLInputElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(() => {
    try {
      const icon = JSON.parse(value);
      return icon;
    } catch (error) {
      return null;
    }
  });

  function openModal() {
    setShowModal(true);
    setTimeout(() => {
      searchbarRef?.current?.focus();
    }, 0);
  }

  return (
    <Field
      name={name}
      id={name}
      error={error}
      hint={description && formatMessage(description)}
      required={required}
    >
      <Flex direction="column" alignItems="stretch" gap={1}>
        <FieldLabel action={labelAction}>{formatMessage(intlLabel)}</FieldLabel>
        <FieldInput
          type="text"
          id="icon-picker-value"
          value={selectedIcon?.name ?? ""}
          placeholder="Select an icon"
          onChange={openModal}
          onClick={openModal}
          disabled={disabled}
          startAction={
            <FieldAction onClick={openModal} label="open icon picker">
              {selectedIcon ? (
                <IconWraper
                  dangerouslySetInnerHTML={{ __html: selectedIcon.component }}
                />
              ) : (
                <Icon
                  colors={(theme: any) => ({
                    path: {
                      fill: theme.colors.neutral500,
                    },
                  })}
                  as={Search}
                  height="0.85rem"
                />
              )}
            </FieldAction>
          }
          endAction={
            selectedIcon && (
              <FieldAction
                onClick={() => {
                  setSelectedIcon(null);
                  onChange({
                    target: {
                      name,
                      type: "string",
                      value: "",
                    },
                  });
                }}
                label="reset icon picker"
              >
                <Icon
                  colors={(theme: any) => ({
                    path: {
                      fill: theme.colors.neutral500,
                    },
                  })}
                  as={Cross}
                  height="0.85rem"
                />
              </FieldAction>
            )
          }
          aria-label={formatMessage({
            id: getTrad("icon-picker.toggle.aria-label"),
            defaultMessage: "Icon picker toggle",
          })}
          aria-controls="icon-picker-value"
          aria-haspopup="dialog"
          aria-expanded={showModal}
        />
        {showModal && (
          <IconsModal
            closeModal={() => setShowModal(false)}
            setSelectedIcon={setSelectedIcon}
            onChange={onChange}
            name={name}
            searchbarRef={searchbarRef}
            icons={icons}
          />
        )}
        <FieldHint />
        <FieldError />
      </Flex>
    </Field>
  );
};

export default IconPickerField;
