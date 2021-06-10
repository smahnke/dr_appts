import React from 'react';

// const Navbar = () => (
//   <nav>
//     <ul>
//       <li>
//         <a href="/doctors">Doctors</a>
//       </li>
//       <li>
//         <a href="/doctors/new">New Doctor</a>
//       </li>
//       <li>
//         <a href="/users">Users</a>
//       </li>
//       <li>
//         <a href="/users/new">New User</a>
//       </li>
//     </ul>
//   </nav>
// )

const Navbar=() => (
  <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Doctor's Appointments:</a>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="navbar-collapse collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/users">Users</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/users/new">New User</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/doctors">Doctors</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/doctors/new">New Doctor</a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  </>
  )

export default Navbar;