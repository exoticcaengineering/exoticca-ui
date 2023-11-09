import { Meta, StoryObj } from '@storybook/react';
import { FilterInput } from '../FilterInput';
import { iconNames } from 'src/types/IconNames';
import { useEffect, useState } from 'react';
import { Item } from 'src/components/Item';
import { Typography } from 'src/components/Typography';

const meta: Meta<typeof FilterInput> = {
  title: 'Components/FilterInput',
  component: FilterInput,
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
};

export default meta;
type Story = StoryObj<typeof FilterInput>;

const Template = ({ ...args }) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const LIST = [
    { item: '', id: '0' },
    { item: 'Item 1', id: '1' },
    { item: 'Item 2', id: '2' },
    { item: 'Item 3', id: '3' },
    { item: 'Item 4', id: '4' },
    { item: 'Item 5', id: '5' },
  ];

  useEffect(() => {
    setInputValue(selectedValue);
  }, [selectedValue]);

  const [list, setList] = useState(LIST);

  const filterBySearch = () => {
    const list = [...LIST];

    const updatedList = list.filter(
      ({ item }) => item.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1,
    );
    if (updatedList.length === 0) {
      setList([{ item: 'No Items with this text', id: '6' }]);
      return;
    }
    if (updatedList.length === list.length) {
      setList(list);
      return;
    }

    setList([list[0], ...updatedList]);
  };

  useEffect(() => {
    filterBySearch();
  }, [inputValue]);

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
          startIcon={{ icon: 'arrow' }}
          label="Label"
          placeholder="Placeholder"
          rounded="both"
          onChange={(e) => setInputValue(e.target.value)}
          defaultValue={selectedValue}
          inputList={(props) => {
            return list.map(({ item, id }) => (
              <Item
                key={id}
                onClick={() => {
                  setSelectedValue(item);
                  props.closeDropdown();
                }}
              >
                <Typography fontSize="body2">{item}</Typography>
              </Item>
            ));
          }}
          {...args}
        ></FilterInput>
      </div>
    </div>
  );
};

export const Base: Story = {
  render: () => <Template />,
};
