import { render } from "@testing-library/react";
import React, { useEffect, useState }  from "react";
import { useDispatch, useSelector} from "react-redux";
import getGroup from "../../action";

const MessagesChat = () => {
  const [
    loadingGroup, setLoadingGroup
  ] = useState(false)

  const dispatch = useDispatch()

  const groupList = useSelector(state => state.GroupReducer)
  console.log(groupList)

  useEffect(() => {
    if (!loadingGroup) {
      dispatch(getGroup());
      setLoadingGroup(true)
    }
  },
  [loadingGroup, dispatch])
  return(
    <div>
      {loadingGroup && groupList.map((group, index) => {
        return(
          <div key={group.id}>
            group.name
          </div>
        )
      })}
    </div>
  )
}

export default MessagesChat
