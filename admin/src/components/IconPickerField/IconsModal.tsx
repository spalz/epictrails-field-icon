import React, { useState, useEffect } from "react";
import { renderToString } from "react-dom/server";
import {
  Button,
  SearchForm,
  Searchbar,
  Typography,
  ModalLayout,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@strapi/design-system";
import styled from "styled-components";

const IconWraper = styled.button`
  margin: ${({ theme }) => theme.spaces[2]};
  color: ${({ theme }) => theme.colors.neutral900};
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces[2]};
  svg {
    width: 24px;
  }
  span {
    flex: 1;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
  }
`;

const SIconsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spaces[2]};
`;

interface IconType {
  name: string;
  component: React.ReactNode;
  tags: string[];
}

interface IconsModalProps {
  closeModal: () => void;
  setSelectedIcon: (icon: { name: string; component: string }) => void;
  name: string;
  onChange: (event: {
    target: { name: string; type: string; value: string };
  }) => void;
  searchbarRef: React.RefObject<HTMLInputElement>;
  icons: IconType[];
}

const IconsModal: React.FC<IconsModalProps> = ({
  closeModal,
  setSelectedIcon,
  name,
  onChange,
  searchbarRef,
  icons,
}) => {
  const [query, setQuery] = useState<string>("");
  const [filteredIcons, setFilteredIcons] = useState<IconType[]>(icons);

  // search logic
  useEffect(() => {
    if (!query) {
      setFilteredIcons(icons);
      return;
    }

    const filtered = icons.filter(({ name, tags }) =>
      [name, ...tags].some((tag) =>
        tag.toLowerCase().includes(query.toLowerCase())
      )
    );
    setFilteredIcons(filtered);
  }, [query, icons]);

  return (
    <ModalLayout onClose={closeModal} labelledBy="title">
      <ModalHeader>
        <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
          Select an icon
        </Typography>
      </ModalHeader>
      <ModalBody>
        <SearchForm style={{ marginBottom: "1rem" }}>
          <Searchbar
            name="searchbar"
            onClear={() => setQuery("")}
            value={query}
            onChange={(e: any) => setQuery(e.target.value)}
            clearLabel="Clearing the search"
            placeholder="Search by icon name or tag"
            ref={searchbarRef}
          >
            Searching for an icon
          </Searchbar>
        </SearchForm>

        <SIconsList>
          {filteredIcons.map(({ name: iconName, component: Icon }) => (
            <IconWraper
              key={iconName}
              onClick={() => {
                const iconString = renderToString(<>{Icon}</>);
                setSelectedIcon({
                  name: iconName,
                  component: iconString,
                });
                onChange({
                  target: {
                    name,
                    type: "string",
                    value: JSON.stringify({
                      name: iconName,
                      component: iconString,
                    }),
                  },
                });
                closeModal();
              }}
            >
              {Icon}
              <span>{iconName}</span>
            </IconWraper>
          ))}
        </SIconsList>
      </ModalBody>
      <ModalFooter
        endActions={
          <>
            <Button onClick={closeModal}>Finish</Button>
          </>
        }
      />
    </ModalLayout>
  );
};

export default IconsModal;
