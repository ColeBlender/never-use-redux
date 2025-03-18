"use client";

import { setUser } from "@/redux/slices/userSlice";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function ReduxPage() {
  const user = useSelector((state: RootState) => state.user.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setUser({
        id: "2",
        email: "user@redux.com",
        username: "redux",
      })
    );
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p>{user?.id}</p>
      <p>{user?.email}</p>
      <p>{user?.username}</p>
    </div>
  );
}

export default ReduxPage;
