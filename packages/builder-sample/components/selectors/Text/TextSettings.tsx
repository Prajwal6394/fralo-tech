import React from 'react';

import { capitalize, weightDescription } from '../../../utils/text';
import { ToolbarSection, ToolbarItem } from '../../editor';

export const TextSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection
        title="Typography"
        props={['fontSize', 'fontWeight', 'textAlign']}
        summary={({ fontSize, fontWeight, textAlign }: any) => {
          return `${fontSize || ''}, ${weightDescription(
            fontWeight
          )}, ${capitalize(textAlign)}`;
        }}
      >
        <ToolbarItem
          full={true}
          propKey="fontSize"
          type="slider"
          label="Font Size"
        />
        <ToolbarItem
          propKey="textAlign"
          type="radio"
          label="Align"
          radioValues={[
            { value: 'left', label: 'Left' },
            { value: 'center', label: 'Center' },
            { value: 'right', label: 'Right' },
          ]}
        />
        <ToolbarItem
          propKey="fontWeight"
          type="radio"
          label="Weight"
          radioValues={[
            { label: 'Regular', value: '400' },
            { label: 'Medium', value: '500' },
            { label: 'Bold', value: '700' },
          ]}
        />
      </ToolbarSection>
      <ToolbarSection
        title="Margin"
        props={['margin']}
        summary={({ margin }: any) => {
          return `${margin[0] || 0}px ${margin[1] || 0}px ${margin[2] || 0}px ${
            margin[3] || 0
          }px`;
        }}
      >
        <ToolbarItem propKey="margin" index={0} type="slider" label="Top" />
        <ToolbarItem propKey="margin" index={1} type="slider" label="Right" />
        <ToolbarItem propKey="margin" index={2} type="slider" label="Bottom" />
        <ToolbarItem propKey="margin" index={3} type="slider" label="Left" />
      </ToolbarSection>
      <ToolbarSection
        title="Appearance"
        props={['color', 'shadow']}
        summary={({ color, shadow }: any) => {
          return (
            <div className="fletext-right">
              <p
                style={{
                  color: color && `rgba(${Object.values(color)})`,
                  textShadow: `0px 0px 2px rgba(0, 0, 0, ${shadow / 100})`,
                }}
                className="text-white text-right"
              >
                T
              </p>
            </div>
          );
        }}
      >
        <ToolbarItem full={true} propKey="color" type="color" label="Text" />
        <ToolbarItem
          full={true}
          propKey="shadow"
          type="slider"
          label="Shadow"
        />
      </ToolbarSection>
    </React.Fragment>
  );
};
