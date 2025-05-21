//import React from 'react';
import Sidebar from '../components/Sidebar';
import NavBar from '../components/NavBar';

const UsersPage = () => {
  return (
    <div>
        <NavBar />
        <div className="d-flex" style={{ marginTop: "60px"}}>
            <Sidebar/>
            <main className="p-4 w-100">
                <h2>Users</h2>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table align-middle">
                            <thead className="table-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Photo</th>
                                    <th>Nickname</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* User 1 */}
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <img
                                            src="/public/assets/pfp/Asa.png"
                                            alt="User Photo"
                                            className="rounded-circle"
                                            style={{
                                            width: '40px',
                                            height: '40px',
                                            objectFit: 'cover',
                                            }}
                                        />
                                    </td>
                                    <td>Asado</td>
                                    <td>Asa Mitaka</td>
                                </tr>
                                {/* User 2 */}
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <img
                                            src="/public/assets/pfp/SaulGoodman.jpg"
                                            alt="User Photo"
                                            className="rounded-circle"
                                            style={{
                                            width: '40px',
                                            height: '40px',
                                            objectFit: 'cover',
                                            }}
                                        />
                                    </td>
                                    <td>John Gaming</td>
                                    <td>John Schmoe</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    </div>

  );
};

export default UsersPage;