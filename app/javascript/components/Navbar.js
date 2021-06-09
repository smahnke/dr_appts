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
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
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
          <li>
            <a href="/users/sign_out" data-method="delete">
              Logout
            </a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  </>
  )

export default Navbar;