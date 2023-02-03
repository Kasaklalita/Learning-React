import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

export default function PostFilter({ filter, setFilter }: any) {
  return (
    <div>
      <MyInput
        placeholder="Поиск"
        value={filter.query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilter({ ...filter, query: e.target.value })
        }
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort: string) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Сортировка по"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />
    </div>
  );
}
