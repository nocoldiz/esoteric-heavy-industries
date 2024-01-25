import React, { FC } from 'react';


interface TypographyProps {}

const Typography: FC<TypographyProps> = () => (
  <div>
<>
  {/* Typography
================================================== */}
  <section id="typography">
    <div className="page-header">
      <h1>Typography</h1>
    </div>
    {/* Headings & Paragraph Copy */}
    <div className="row">
      <div className="span4">
        <div className="well">
          <h1>h1. Heading 1</h1>
          <h2>h2. Heading 2</h2>
          <h3>h3. Heading 3</h3>
          <h4>h4. Heading 4</h4>
          <h5>h5. Heading 5</h5>
          <h6>h6. Heading 6</h6>
        </div>
      </div>
      <div className="span4">
        <h3>Example body text</h3>
        <p>
          Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Nullam id dolor id nibh ultricies vehicula ut id elit.
        </p>
        <p>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Donec sed odio dui.
        </p>
      </div>
      <div className="span4">
        <h3>Example addresses</h3>
        <address>
          <img src="img/test/spinningearth.gif" width={26} />
          &nbsp;
          <strong>Twitter, Inc.</strong>
          <br />
          795 Folsom Ave, Suite 600
          <br />
          San Francisco, CA 94107
          <br />
          <abbr title="Phone">P:</abbr> (123) 456-7890
        </address>
        <address>
          <strong>Full Name</strong>
          <br />
          <a href="mailto:#">
            <img src="img/test/emailme.gif" />
            first.last@gmail.com
          </a>
        </address>
      </div>
    </div>
    <div className="row">
      <div className="span6">
        <blockquote>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <small>
            Someone famous in <cite title="Source Title">Source Title</cite>
          </small>
        </blockquote>
      </div>
      <div className="span6">
        <blockquote className="pull-right">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <small>
            Someone famous in <cite title="Source Title">Source Title</cite>
          </small>
        </blockquote>
      </div>
    </div>
  </section>
  <br />
  <br />
  <center>
    {/* TRIPLE MC HAMMER */}
    <img src="img/test/mchammer.gif" />
    &nbsp;&nbsp;
    <img src="img/test/mchammer.gif" />
    &nbsp;&nbsp;
    <img src="img/test/mchammer.gif" />
  </center>
  {/* Navbar
================================================== */}
  <section id="navbar" style={{ paddingTop: 0 }}>
    <div className="page-header">
      <h1>Navbars</h1>
    </div>
    <div className="navbar">
      <div className="navbar-inner">
        <div className="container" style={{ width: "auto" }}>
          <a
            className="btn btn-navbar"
            data-toggle="collapse"
            data-target=".nav-collapse"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </a>
          <a className="brand" href="#">
            Project name
          </a>
          <div className="nav-collapse">
            <ul className="nav">
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Link</a>
              </li>
              <li>
                <a href="#">Link</a>
              </li>
              <li>
                <a href="#">Link</a>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Dropdown <b className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li>
                    <a href="#">Another action</a>
                  </li>
                  <li>
                    <a href="#">Something else here</a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#">Separated link</a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="navbar-search pull-left" action="">
              <input
                type="text"
                className="search-query span2"
                placeholder="Search"
              />
            </form>
            <ul className="nav pull-right">
              <li>
                <a href="#">Link</a>
              </li>
              <li className="divider-vertical" />
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Dropdown <b className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li>
                    <a href="#">Another action</a>
                  </li>
                  <li>
                    <a href="#">Something else here</a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#">Separated link</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* /.nav-collapse */}
        </div>
      </div>
      {/* /navbar-inner */}
    </div>
    {/* /navbar */}
    <div className="navbar navbar-inverse">
      <div className="navbar-inner">
        <div className="container" style={{ width: "auto" }}>
          <a
            className="btn btn-navbar"
            data-toggle="collapse"
            data-target=".nav-collapse"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </a>
          <a className="brand" href="#">
            Project name
          </a>
          <div className="nav-collapse">
            <ul className="nav">
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Link</a>
              </li>
              <li>
                <a href="#">Link</a>
              </li>
              <li>
                <a href="#">Link</a>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Dropdown <b className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li>
                    <a href="#">Another action</a>
                  </li>
                  <li>
                    <a href="#">Something else here</a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#">Separated link</a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="navbar-search pull-left" action="">
              <input
                type="text"
                className="search-query span2"
                placeholder="Search"
              />
            </form>
            <ul className="nav pull-right">
              <li>
                <a href="#">Link</a>
              </li>
              <li className="divider-vertical" />
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Dropdown <b className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li>
                    <a href="#">Another action</a>
                  </li>
                  <li>
                    <a href="#">Something else here</a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#">Separated link</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* /.nav-collapse */}
        </div>
      </div>
      {/* /navbar-inner */}
    </div>
    {/* /navbar */}
  </section>
  <br />
  <br />
  <br />
  <center>
    {/* TRIPLE MC HAMMER */}
    <img src="img/test/mchammer.gif" />
    &nbsp;&nbsp;
    <img src="img/test/mchammer.gif" />
    &nbsp;&nbsp;
    <img src="img/test/mchammer.gif" />
  </center>
  {/* Buttons
================================================== */}
  <section id="buttons" style={{ paddingTop: 0 }}>
    <div className="page-header">
      <h1>Buttons</h1>
    </div>
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Button</th>
          <th>Large Button</th>
          <th>Small Button</th>
          <th>Disabled Button</th>
          <th>Button with Icon</th>
          <th>Split Button</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <a className="btn" href="#">
              Default
            </a>
          </td>
          <td>
            <a className="btn btn-large" href="#">
              Default
            </a>
          </td>
          <td>
            <a className="btn btn-small" href="#">
              Default
            </a>
          </td>
          <td>
            <a className="btn disabled" href="#">
              Default
            </a>
          </td>
          <td>
            <a className="btn" href="#">
              <i className="icon-cog" /> Default
            </a>
          </td>
          <td>
            <div className="btn-group">
              <a className="btn" href="#">
                Default
              </a>
              <a
                className="btn dropdown-toggle"
                data-toggle="dropdown"
                href="#"
              >
                <span className="caret" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Another action</a>
                </li>
                <li>
                  <a href="#">Something else here</a>
                </li>
                <li className="divider" />
                <li>
                  <a href="#">Separated link</a>
                </li>
              </ul>
            </div>
            {/* /btn-group */}
          </td>
        </tr>
        <tr>
          <td>
            <a className="btn btn-primary" href="#">
              Primary
            </a>
          </td>
          <td>
            <a className="btn btn-primary btn-large" href="#">
              Primary
            </a>
          </td>
          <td>
            <a className="btn btn-primary btn-small" href="#">
              Primary
            </a>
          </td>
          <td>
            <a className="btn btn-primary disabled" href="#">
              Primary
            </a>
          </td>
          <td>
            <a className="btn btn-primary" href="#">
              <i className="icon-shopping-cart icon-white" /> Primary
            </a>
          </td>
          <td>
            <div className="btn-group">
              <a className="btn btn-primary" href="#">
                Primary
              </a>
              <a
                className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown"
                href="#"
              >
                <span className="caret" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Another action</a>
                </li>
                <li>
                  <a href="#">Something else here</a>
                </li>
                <li className="divider" />
                <li>
                  <a href="#">Separated link</a>
                </li>
              </ul>
            </div>
            {/* /btn-group */}
          </td>
        </tr>
        <tr>
          <td>
            <a className="btn btn-info" href="#">
              Info
            </a>
          </td>
          <td>
            <a className="btn btn-info btn-large" href="#">
              Info
            </a>
          </td>
          <td>
            <a className="btn btn-info btn-small" href="#">
              Info
            </a>
          </td>
          <td>
            <a className="btn btn-info disabled" href="#">
              Info
            </a>
          </td>
          <td>
            <a className="btn btn-info" href="#">
              <i className="icon-exclamation-sign icon-white" /> Info
            </a>
          </td>
          <td>
            <div className="btn-group">
              <a className="btn btn-info" href="#">
                Info
              </a>
              <a
                className="btn btn-info dropdown-toggle"
                data-toggle="dropdown"
                href="#"
              >
                <span className="caret" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Another action</a>
                </li>
                <li>
                  <a href="#">Something else here</a>
                </li>
                <li className="divider" />
                <li>
                  <a href="#">Separated link</a>
                </li>
              </ul>
            </div>
            {/* /btn-group */}
          </td>
        </tr>
        <tr>
          <td>
            <a className="btn btn-success" href="#">
              Success
            </a>
          </td>
          <td>
            <a className="btn btn-success btn-large" href="#">
              Success
            </a>
          </td>
          <td>
            <a className="btn btn-success btn-small" href="#">
              Success
            </a>
          </td>
          <td>
            <a className="btn btn-success disabled" href="#">
              Success
            </a>
          </td>
          <td>
            <a className="btn btn-success" href="#">
              <i className="icon-ok icon-white" /> Success
            </a>
          </td>
          <td>
            <div className="btn-group">
              <a className="btn btn-success" href="#">
                Success
              </a>
              <a
                className="btn btn-success dropdown-toggle"
                data-toggle="dropdown"
                href="#"
              >
                <span className="caret" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Another action</a>
                </li>
                <li>
                  <a href="#">Something else here</a>
                </li>
                <li className="divider" />
                <li>
                  <a href="#">Separated link</a>
                </li>
              </ul>
            </div>
            {/* /btn-group */}
          </td>
        </tr>
        <tr>
          <td>
            <a className="btn btn-warning" href="#">
              Warning
            </a>
          </td>
          <td>
            <a className="btn btn-warning btn-large" href="#">
              Warning
            </a>
          </td>
          <td>
            <a className="btn btn-warning btn-small" href="#">
              Warning
            </a>
          </td>
          <td>
            <a className="btn btn-warning disabled" href="#">
              Warning
            </a>
          </td>
          <td>
            <a className="btn btn-warning" href="#">
              <i className="icon-warning-sign icon-white" /> Warning
            </a>
          </td>
          <td>
            <div className="btn-group">
              <a className="btn btn-warning" href="#">
                Warning
              </a>
              <a
                className="btn btn-warning dropdown-toggle"
                data-toggle="dropdown"
                href="#"
              >
                <span className="caret" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Another action</a>
                </li>
                <li>
                  <a href="#">Something else here</a>
                </li>
                <li className="divider" />
                <li>
                  <a href="#">Separated link</a>
                </li>
              </ul>
            </div>
            {/* /btn-group */}
          </td>
        </tr>
        <tr>
          <td>
            <a className="btn btn-danger" href="#">
              Danger
            </a>
          </td>
          <td>
            <a className="btn btn-danger btn-large" href="#">
              Danger
            </a>
          </td>
          <td>
            <a className="btn btn-danger btn-small" href="#">
              Danger
            </a>
          </td>
          <td>
            <a className="btn btn-danger disabled" href="#">
              Danger
            </a>
          </td>
          <td>
            <a className="btn btn-danger" href="#">
              <i className="icon-remove icon-white" /> Danger
            </a>
          </td>
          <td>
            <div className="btn-group">
              <a className="btn btn-danger" href="#">
                Danger
              </a>
              <a
                className="btn btn-danger dropdown-toggle"
                data-toggle="dropdown"
                href="#"
              >
                <span className="caret" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Another action</a>
                </li>
                <li>
                  <a href="#">Something else here</a>
                </li>
                <li className="divider" />
                <li>
                  <a href="#">Separated link</a>
                </li>
              </ul>
            </div>
            {/* /btn-group */}
          </td>
        </tr>
        <tr>
          <td>
            <a className="btn btn-inverse" href="#">
              Inverse
            </a>
          </td>
          <td>
            <a className="btn btn-inverse btn-large" href="#">
              Inverse
            </a>
          </td>
          <td>
            <a className="btn btn-inverse btn-small" href="#">
              Inverse
            </a>
          </td>
          <td>
            <a className="btn btn-inverse disabled" href="#">
              Inverse
            </a>
          </td>
          <td>
            <a className="btn btn-inverse" href="#">
              <i className="icon-random icon-white" /> Inverse
            </a>
          </td>
          <td>
            <div className="btn-group">
              <a className="btn btn-inverse" href="#">
                Inverse
              </a>
              <a
                className="btn btn-inverse dropdown-toggle"
                data-toggle="dropdown"
                href="#"
              >
                <span className="caret" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Another action</a>
                </li>
                <li>
                  <a href="#">Something else here</a>
                </li>
                <li className="divider" />
                <li>
                  <a href="#">Separated link</a>
                </li>
              </ul>
            </div>
            {/* /btn-group */}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
  {/* Forms
================================================== */}
  <section id="forms">
    <div className="page-header">
      <h1>Forms</h1>
    </div>
    <div className="row">
      <div className="span7 offset1">
        <form className="well form-search">
          <input type="text" className="input-medium search-query" />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
        <form className="well form-search">
          <input type="text" className="input-small" placeholder="Email" />
          <input
            type="password"
            className="input-small"
            placeholder="Password"
          />
          <button type="submit" className="btn">
            Go
          </button>
        </form>
        <form className="form-horizontal well">
          <fieldset>
            <legend>Controls Bootstrap supports</legend>
            <div className="control-group">
              <label className="control-label" htmlFor="input01">
                Text input
              </label>
              <div className="controls">
                <input type="text" className="input-xlarge" id="input01" />
                <p className="help-block">
                  In addition to freeform text, any HTML5 text-based input
                  appears like so.
                </p>
              </div>
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="optionsCheckbox">
                Checkbox
              </label>
              <div className="controls">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    id="optionsCheckbox"
                    defaultValue="option1"
                  />
                  Option one is this and that—be sure to include why it's great
                </label>
              </div>
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="select01">
                Select list
              </label>
              <div className="controls">
                <select id="select01">
                  <option>something</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="multiSelect">
                Multicon-select
              </label>
              <div className="controls">
                <select id="multiSelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="fileInput">
                File input
              </label>
              <div className="controls">
                <input className="input-file" id="fileInput" type="file" />
              </div>
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="textarea">
                Textarea
              </label>
              <div className="controls">
                <textarea
                  className="input-xlarge"
                  id="textarea"
                  rows={3}
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="focusedInput">
                Focused input
              </label>
              <div className="controls">
                <input
                  className="input-xlarge focused"
                  id="focusedInput"
                  type="text"
                  defaultValue="This is focused…"
                />
              </div>
            </div>
            <div className="control-group">
              <label className="control-label">Uneditable input</label>
              <div className="controls">
                <span className="input-xlarge uneditable-input">
                  Some value here
                </span>
              </div>
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="disabledInput">
                Disabled input
              </label>
              <div className="controls">
                <input
                  className="input-xlarge disabled"
                  id="disabledInput"
                  type="text"
                  placeholder="Disabled input here…"
                />
              </div>
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="optionsCheckbox2">
                Disabled checkbox
              </label>
              <div className="controls">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    id="optionsCheckbox2"
                    defaultValue="option1"
                  />
                  This is a disabled checkbox
                </label>
              </div>
            </div>
            <div className="control-group warning">
              <label className="control-label" htmlFor="inputWarning">
                Input with warning
              </label>
              <div className="controls">
                <input type="text" id="inputWarning" />
                <span className="help-inline">
                  Something may have gone wrong
                </span>
              </div>
            </div>
            <div className="control-group error">
              <label className="control-label" htmlFor="inputError">
                Input with error
              </label>
              <div className="controls">
                <input type="text" id="inputError" />
                <span className="help-inline">Please correct the error</span>
              </div>
            </div>
            <div className="control-group success">
              <label className="control-label" htmlFor="inputSuccess">
                Input with success
              </label>
              <div className="controls">
                <input type="text" id="inputSuccess" />
                <span className="help-inline">Woohoo!</span>
              </div>
            </div>
            <div className="control-group success">
              <label className="control-label" htmlFor="selectError">
                Select with success
              </label>
              <div className="controls">
                <select id="selectError">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <span className="help-inline">Woohoo!</span>
              </div>
            </div>
            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                Save changes
              </button>
              <button type="reset" className="btn">
                Cancel
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </section>
  {/* Tables
================================================== */}
  <section id="tables">
    <div className="page-header">
      <h1>Tables</h1>
    </div>
    <center>
      <img src="img/test/construction.gif" />
    </center>
    <table className="table table-bordered table-striped table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </section>
  {/* Miscellaneous
================================================== */}
  <section id="miscellaneous">
    <div className="page-header">
      <h1>
        Miscellaneous <img src="img/test/new2.gif" />
      </h1>
    </div>
    <div className="row">
      <div className="span4">
        <h3 id="breadcrumbs">Breadcrumbs</h3>
        <ul className="breadcrumb">
          <li className="active">Home</li>
        </ul>
        <ul className="breadcrumb">
          <li>
            <a href="#">Home</a> <span className="divider">/</span>
          </li>
          <li>
            <a href="#">Library</a> <span className="divider">/</span>
          </li>
          <li className="active">Data</li>
        </ul>
      </div>
      <div className="span4">
        <h3 id="pagination">Pagination</h3>
        <div className="pagination">
          <ul>
            <li>
              <a href="#">←</a>
            </li>
            <li className="active">
              <a href="#">10</a>
            </li>
            <li className="disabled">
              <a href="#">...</a>
            </li>
            <li>
              <a href="#">20</a>
            </li>
            <li>
              <a href="#">→</a>
            </li>
          </ul>
        </div>
        <div className="pagination pagination-centered">
          <ul>
            <li className="active">
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">5</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="span4">
        <h3 id="pager">Pagers</h3>
        <ul className="pager">
          <li>
            <a href="#">Previous</a>
          </li>
          <li>
            <a href="#">Next</a>
          </li>
        </ul>
        <ul className="pager">
          <li className="previous disabled">
            <a href="#">← Older</a>
          </li>
          <li className="next">
            <a href="#">Newer →</a>
          </li>
        </ul>
      </div>
    </div>
    {/* Navs
  ================================================== */}
    <div className="row">
      <div className="span4">
        <h3 id="tabs">Tabs</h3>
        <ul className="nav nav-tabs">
          <li className="active">
            <a href="#A" data-toggle="tab">
              Section 1
            </a>
          </li>
          <li>
            <a href="#B" data-toggle="tab">
              Section 2
            </a>
          </li>
          <li>
            <a href="#C" data-toggle="tab">
              Section 3
            </a>
          </li>
        </ul>
        <div className="tabbable">
          <div className="tab-content">
            <div className="tab-pane active" id="A">
              <p>I'm in Section A.</p>
            </div>
            <div className="tab-pane" id="B">
              <p>Howdy, I'm in Section B.</p>
            </div>
            <div className="tab-pane" id="C">
              <p>What up girl, this is Section C.</p>
            </div>
          </div>
        </div>{" "}
        {/* /tabbable */}
      </div>
      <div className="span4">
        <h3 id="pills">Pills</h3>
        <ul className="nav nav-pills">
          <li className="active">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
              Dropdown <b className="caret" />
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#">Action</a>
              </li>
              <li>
                <a href="#">Another action</a>
              </li>
              <li>
                <a href="#">Something else here</a>
              </li>
              <li className="divider" />
              <li>
                <a href="#">Separated link</a>
              </li>
            </ul>
          </li>
          <li className="disabled">
            <a href="#">Disabled link</a>
          </li>
        </ul>
      </div>
      <div className="span4">
        <h3 id="list">Lists</h3>
        <div className="well" style={{ padding: "8px 0" }}>
          <ul className="nav nav-list">
            <li className="nav-header">List header</li>
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Library</a>
            </li>
            <li>
              <a href="#">Applications</a>
            </li>
            <li className="nav-header">Another list header</li>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li className="divider" />
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* Labels
================================================== */}
    <div className="row">
      <div className="span6">
        <h3 id="labels">Labels</h3>
        <span className="label">Default</span>
        <span className="label label-success">Success</span>
        <span className="label label-warning">Warning</span>
        <span className="label label-important">Important</span>
        <span className="label label-info">Info</span>
        <span className="label label-inverse">Inverse</span>
      </div>
      <div className="span6">
        <h3 id="badges">Badges</h3>
        <span className="badge">Default</span>
        <span className="badge badge-success">Success</span>
        <span className="badge badge-warning">Warning</span>
        <span className="badge badge-important">Important</span>
        <span className="badge badge-info">Info</span>
        <span className="badge badge-inverse">Inverse</span>
      </div>
    </div>
    <br />
    {/* Progress bars
================================================== */}
    <h3 id="progressbars">Progress bars</h3>
    <div className="row">
      <div className="span4">
        <div className="progress">
          <div className="bar" style={{ width: "60%" }} />
        </div>
      </div>
      <div className="span4">
        <div className="progress progress-info progress-striped">
          <div className="bar" style={{ width: "20%" }} />
        </div>
      </div>
      <div className="span4">
        <div className="progress progress-danger progress-striped active">
          <div className="bar" style={{ width: "45%" }} />
        </div>
      </div>
    </div>
    <br />
    {/* Alerts & Messages
================================================== */}
    <h3 id="alerts">Alerts</h3>
    <div className="row">
      <div className="span12">
        <div className="alert alert-block">
          <a className="close">×</a>
          <img
            className="pull-left"
            style={{ marginTop: "-8px" }}
            src="img/test/drudgesiren.gif"
            width={80}
          />
          <h4 className="alert-heading">Alert block</h4>
          <p>
            Best check yo self, you're not looking too good. Nulla vitae elit
            libero, a pharetra augue. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et.
          </p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="span4">
        <div className="alert alert-error">
          <a className="close">×</a>
          <strong>Error</strong> Change a few things up and try submitting
          again.
        </div>
      </div>
      <div className="span4">
        <div className="alert alert-success">
          <a className="close">×</a>
          <strong>Success</strong> You successfully read this important alert
          message.
        </div>
      </div>
      <div className="span4">
        <div className="alert alert-info">
          <a className="close">×</a>
          <strong>Information</strong> This alert needs your attention, but it's
          not super important.
        </div>
      </div>
    </div>
  </section>
</>
  </div>
);

export default Typography;
