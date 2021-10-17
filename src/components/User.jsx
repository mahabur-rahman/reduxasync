import React, { useEffect } from "react";
import { userList } from "../redux/actions/userActions";
import { connect } from "react-redux";

const User = ({ userList, loading, users, error }) => {
  useEffect(() => {
    userList();
  }, []);

  return (
    <>
      <h1>Data Fetch with Redux 👍</h1>
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div>
          {users.map((data) => (
            <h2 key={data.id}>{data.title}</h2>
          ))}
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.userReducer.loading,
  users: state.userReducer.users,
  error: state.userReducer.error,
});

export default connect(mapStateToProps, { userList })(User);
