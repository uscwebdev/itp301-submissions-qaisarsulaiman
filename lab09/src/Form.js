import React from 'react';
import { useState } from 'react';

export default function Form() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [isStudent, setIsStudent] = useState(true);
  const [classStanding, setClassStanding] = useState(-1);
  const [newsletters, setNewsletters] = useState(false);
  const [events, setEvents] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const [usernameError, setUsernameError] = useState();
  const [emailError, setEmailError] = useState();
  const [classError, setClassError] = useState();
  const [subscribeError, setSubscribeError] = useState();

  function handleUsernameChange(e) {
    console.log(e.target.value);
  }

  function handleSubmit(e) {
    var foundError = false;

    // Username cannot be empty
    // Username cannot contain uppercaes letters
    if (username.length == 0) {
      // Username is empty.
      foundError = true;
      setUsernameError('Username cannot be empty.');
    } else if (username != username.toLowerCase()) {
      // Username contains uppercase letters.
      foundError = true;
      setUsernameError('Username cannot contain uppercase letters.');
    } else {
      // No errors.
      setUsernameError('');
    }

    // Email cannot be empty.
    // Email must contain "@" character.
    if (email.length == 0) {
      // Email is empty.
      foundError = true;
      setEmailError('Email cannot be empty.');
    } else if (email.indexOf('@') == -1) {
      // No index, so .indexOf returns -1
      foundError = true;
      setEmailError('Email must contain an @ character.');
    } else {
      setEmailError('');
    }

    // Class Standing field is required for current students.
    if (isStudent == true && classStanding == -1) {
      foundError = true;
      setClassError('Class Standing field is required for current students.');
    } else {
      setClassError('');
    }

    // At least one subscription is required.
    if (newsletters == false && events == false && marketing == false) {
      // All checkboxes are unchecked.
      foundError = true;
      setSubscribeError('At least one subscription is required.');
    } else {
      setSubscribeError('');
    }

    // Final flag variable
    if (foundError == true) {
      // At least on error
      // Prevent from submitting
      e.preventDefault();
    } else {
      // No errors
      alert('Form was successfully submitted!');
    }
  }

  return (
    <div className="container">
      <div className="row">
        <h2 className="col-12 mt-5 mb-4">Signup Form</h2>

        <div className="col-12">
          Validation rules:
          <ul>
            <li>Username cannot be empty.</li>
            <li>Username cannot contain uppercase letters.</li>
            <li>Email cannot be empty.</li>
            <li>Email must contain "@" character.</li>
            <li>Class Standing field is required for current students.</li>
            <li className="mb-4">At least one subscription is required.</li>
          </ul>
        </div>

        <div className="col-12">
          <form id="signup-form" onSubmit={handleSubmit}>
            <div className="row my-3">
              <label htmlFor="username" className="col-sm-2 col-form-label">
                Username:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="ttrojan"
                  id="username"
                  // onChange={handleUsernameChange}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setUsername(e.target.value);
                  }}
                  value={username}
                />

                <small id="username-error" className="form-text text-danger">
                  {usernameError}
                </small>
              </div>
            </div>

            <div className="row my-3">
              <label htmlFor="email" className="col-sm-2 col-form-label">
                Email:
              </label>
              <div className="col-sm-10">
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  type="text"
                  className="form-control"
                  placeholder="ttrojan@usc.edu"
                  id="email"
                />

                <small id="email-error" className="form-text text-danger">
                  {emailError}
                </small>
              </div>
            </div>

            <div className="row my-3">
              <label className="col-sm-2 col-form-label">
                Current Student?
              </label>
              <div className="col-sm-10">
                <div className="align-middle form-check form-check-inline">
                  <input
                    onChange={() => {
                      setIsStudent(true);
                    }}
                    className="form-check-input"
                    type="radio"
                    id="student-yes"
                    value="yes"
                    // defaultChecked
                    checked={isStudent}
                  />
                  <label
                    className="form-check-label my-1"
                    htmlFor="student-yes"
                  >
                    Yes
                  </label>
                </div>

                <div className="align-middle form-check form-check-inline">
                  <input
                    onChange={() => {
                      setIsStudent(false);
                    }}
                    className="form-check-input"
                    type="radio"
                    id="student-no"
                    value="no"
                    checked={!isStudent}
                  />
                  <label className="form-check-label my-1" htmlFor="student-no">
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className="row my-3">
              <label
                htmlFor="class-standing"
                className="col-sm-2 col-form-label"
              >
                Class Standing:
              </label>
              <div className="col-sm-10">
                <select
                  disabled={!isStudent}
                  onChange={(e) => {
                    setClassStanding(e.target.value);
                  }}
                  value={classStanding}
                  className="form-control"
                  id="class-standing"
                >
                  <option value="-1" disabled>
                    -- Select One --
                  </option>
                  <option value="freshman">Freshman</option>
                  <option value="sophomore">Sophomore</option>
                  <option value="junior">Junior</option>
                  <option value="senior">Senior</option>
                  <option value="na">N/A</option>
                </select>

                <small id="class-error" className="form-text text-danger">
                  {classError}
                </small>
              </div>
            </div>

            <div className="row my-3">
              <label className="col-sm-2 col-form-label">Subscribe:</label>
              <div className="col-sm-10">
                <div className="form-check form-check-inline">
                  <input
                    onChange={() => {
                      setNewsletters(!newsletters); // Toggle
                    }}
                    checked={newsletters}
                    className="form-check-input"
                    type="checkbox"
                    id="newsletters"
                    value="newsletters"
                  />
                  <label
                    className="form-check-label my-1"
                    htmlFor="newsletters"
                  >
                    Newsletters
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    onChange={() => {
                      setEvents(!events);
                    }}
                    checked={events}
                    className="form-check-input"
                    type="checkbox"
                    id="events"
                    value="events"
                  />
                  <label className="form-check-label my-1" htmlFor="events">
                    Events
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    onChange={() => {
                      setMarketing(!marketing);
                    }}
                    checked={marketing}
                    className="form-check-input"
                    type="checkbox"
                    id="marketing"
                    value="marketing"
                  />
                  <label className="form-check-label my-1" htmlFor="marketing">
                    Marketing
                  </label>
                </div>

                <small id="subscribe-error" className="form-text text-danger">
                  {subscribeError}
                </small>
              </div>
            </div>

            <div className="row my-3">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
