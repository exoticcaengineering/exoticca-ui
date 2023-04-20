import { Meta, Story } from '@storybook/react';
import { FilterInput } from '../FilterInput';
import { iconNames } from 'src/types/IconNames';
import { useEffect, useState } from 'react';
import { Item } from 'src/components/Item';
import { Typography } from 'src/components/Typography';
import { InputFilterProps } from '../../Input.types';

export default {
  title: 'Components/Input/FilterInput',
  component: FilterInput,
  args: {
    icon: 'arrow',
    label: 'Label',
    placeholder: 'Placeholder',
    rounded: 'both',
  },
  argTypes: {
    icon: {
      options: [...iconNames, undefined],
      control: { type: 'select' },
      category: 'Prop',
    },
    rounded: {
      options: ['right', 'left', 'both'],
      control: { type: 'select' },
      category: 'Prop',
    },
  },
} as Meta<InputFilterProps>;

const Template: Story<InputFilterProps> = ({
  icon,
  label,
  placeholder,
  rounded,
}: InputFilterProps) => {
  const [value, setValue] = useState('');
  const [selectedValue, setselectedValue] = useState('');

  const LIST = [
    { item: 'Item 1', id: '1' },
    { item: 'Item 2', id: '2' },
    { item: 'Item 3', id: '3' },
    { item: 'Item 4', id: '4' },
    { item: 'Item 5', id: '5' },
  ];

  useEffect(() => {
    setValue(selectedValue);
  }, [selectedValue]);

  const [list, setList] = useState(LIST);

  const filterBySearch = () => {
    const list = [...LIST];

    const updatedList = list.filter(
      ({ item }) => item.toLowerCase().indexOf(value.toLowerCase()) !== -1,
    );
    if (updatedList.length === 0) {
      setList([{ item: 'No Items with this text', id: '1' }]);
      return;
    }

    setList(updatedList);
  };

  useEffect(() => {
    filterBySearch();
  }, [value]);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          margin: '5rem',
          width: '15rem',
        }}
      >
        <FilterInput
          icon={icon}
          label={label}
          placeholder={placeholder}
          rounded={rounded}
          setValue={setValue}
          value={value}
          selectedValue={selectedValue}
        >
          {list.map(({ item, id }) => (
            <Item key={id} onClick={() => setselectedValue(item)}>
              <Typography fontSize="body2">{item}</Typography>
            </Item>
          ))}
        </FilterInput>
      </div>
    </div>
  );
};
export const Base = Template.bind({});
