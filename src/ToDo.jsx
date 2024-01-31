import React from "react";

import {
  ListItem,
  ListItemText,
  InputBase,
  Checkbox,
  ListItemSecondaryAction,
  IconButton
} from "@mui/material"

import DeleteOutlined from "@mui/icons-material/DeleteOutlined"


class ToDo extends React.Component {
  constructor(props) {
    //props 오브젝트 초기화
    super(props);
    //props는 수정이 안되서 state로 변환
    this.state = { item: this.props.item };

  }

  render() {
    //자주 사용하는 데이터를 짧게 사용하기 위해서 다른 변수에 대입
    const item = this.state.item;
    return (
      <ListItem>
        <Checkbox checked={item.done} />
        <ListItemText>
          <InputBase inputProps={{ "aria-label": "naked" }}
            type="text"
            id={item.id}
            value={item.title}
            multiline={true}
            fullwidth={true}
          />
        </ListItemText>

        <ListItemSecondaryAction>
          <IconButton aria-label="Delete ToDo">
            <DeleteOutlined />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

    );
  }
}

export default ToDo;