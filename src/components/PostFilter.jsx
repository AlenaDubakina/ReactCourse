import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({ filter, setFilter }) => {
  const options = [
    { value: 'title', name: 'По названию' },
    { value: 'body', name: 'По описанию' },
  ];
  return (
    <div>
      <MyInput
        value={filter.query}
        placeholder="Поиск ..."
        onChange={(event) =>
          setFilter({ ...filter, query: event.target.value })
        }
      />
      <MySelect
        defaultValue="Сортировка по"
        options={options}
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
      />
    </div>
  );
};

export default PostFilter;
