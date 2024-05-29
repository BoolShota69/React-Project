// import React, { Component } from 'react';
// import { createRoot } from 'react-dom/client';
// import Header from './Header.jsx';
// import { dataSiswa as initialDataSiswa } from './data.js';
// import CardList from './CardList.jsx';
// import DeleteButton from './DeleteButton.jsx';

// // Ensure Card is defined and exported correctly
// export function Card({ id, Nama, Kelas, Alamat, Foto, onDelete }) {
//   return (
//     <div
//       style={{
//         border: '1px solid #ccc',
//         padding: '10px',
//         margin: '10px 0',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//       }}
//     >
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         <div style={{ marginRight: '20px' }}>
//           <p>Nama: {Nama}</p>
//           <p>Kelas: {Kelas}</p>
//           <p>Alamat: {Alamat}</p>
//         </div>
//         <img
//           src={Foto}
//           alt=""
//           style={{ width: '200px', height: '150px', marginRight: '20px' }}
//         />
//       </div>
//       <DeleteButton onDelete={onDelete} />
//     </div>
//   );
// }

// class Biodata extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dataSiswa: initialDataSiswa,
//     };
//   }

//   handleDelete = (id) => {
//     this.setState((prevState) => ({
//       dataSiswa: prevState.dataSiswa.filter((siswa) => siswa.id !== id),
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <Header />
//         <CardList
//           dataSiswa={this.state.dataSiswa}
//           onDelete={this.handleDelete}
//         />
//       </div>
//     );
//   }
// }

// const root = createRoot(document.getElementById('root'));
// root.render(<Biodata />);
