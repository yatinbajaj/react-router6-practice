import React, { useState } from "react";
import styled from "styled-components";

const items = [
    {
        name: "Product Info",
        content: <div>Information products are products where the most important part of what you sell is knowledge. Usually these products are sold digitally, and can be downloaded from your website. Because “information” is the key value of an information product, they often don't have any kind of physical form.</div>,
    },
    {
        name: "Item Info",
        content: <div>An "item of information" means any of the following: a syllable of a word; an abbreviation; a number (whether one digit or more); a symbol; or a geometric shape.
        </div>,
    },
    {
        name: "Contact Info",
        content: <div>contact information means: the name of a person submitting a document or of a person on whose behalf a document is being submitted; telephone numbers; personal or business addresses; email addresses..</div>,
    },
];

const StyledAccordion = styled.div`
  overflow: hidden;
  width: 30.75rem;
  border-radius: 0.5rem;
  background: #27262c;
  color: #f9f9f9;
  margin: 4rem auto;
`;
const StyledAccordionInner = styled.div`
  position: absolute;
  padding: 1rem;
  color: #c3c1cb;
`;
const StyledAccordionHeader = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  padding: 0 1rem;
  font-size: 1rem;
  text-align: left;
  background: #212025;
  color: inherit;
  cursor: pointer;
`;
const StyledAccordionHeaderIcon = styled.span`
  transform: rotate(${(p) => (p.isActive ? -180 : 0)}deg);
  transition: all 0.25s;
`;
const StyledAccordionContent = styled.div`
  position: relative;
  overflow: hidden;
  height: ${(p) => {
        const inner = document.getElementById(p.itemName);
        return `${p.isActive ? inner?.clientHeight : 0}px`;
    }};
  transition: height 0.35s;
`;

const AccordionContent = ({ onclick, itemName, itemContent, isActive }) => {
    return (
        <React.Fragment>
            <StyledAccordionHeader onClick={onclick}>
                {itemName}
                <StyledAccordionHeaderIcon isActive={isActive} className="material-icons" >
                    expand_more
                </StyledAccordionHeaderIcon>
            </StyledAccordionHeader>
            <StyledAccordionContent itemName={itemName} isActive={isActive}>
                <StyledAccordionInner id={itemName}>
                    {itemContent}
                </StyledAccordionInner>
            </StyledAccordionContent>
        </React.Fragment>
    );
};

function Accordion() {
    const [activeItem, setActiveItem] = useState();
    const headerClickedHandler = (name) => {
        setActiveItem(name === activeItem ? undefined : name);
    };
    return (
        <StyledAccordion>
            {items.map((item) => {
                const isActive = activeItem === item.name;
                return (
                    <AccordionContent
                        onclick={() => headerClickedHandler(item.name)}
                        itemName={item.name}
                        itemContent={item.content}
                        isActive={isActive}
                        key={item.name}
                    />
                );
            })}
        </StyledAccordion>
    );
}

export default Accordion;
