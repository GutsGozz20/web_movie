import { Link } from "react-router-dom";


export default function Header() {
    return (
        <div className="wrapper skin-blue">
            <header className="main-header">
            {/* Logo */}
            <a href="index2.html" className="logo"><b>Admin</b>LTE</a>

            {/* Navbar */}
            <nav className="navbar navbar-static-top" role="navigation">
                {/* Sidebar toggle button */}
                <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                    <span className="sr-only">Toggle navigation</span>
                </a>

                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        {/* Messages Dropdown */}
                        <li className="dropdown messages-menu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-envelope-o"></i>
                                <span className="label label-success">4</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="header">You have 4 messages</li>
                                <li>
                                    <ul className="menu">
                                        <li>
                                            <a href="#">
                                                <div className="pull-left">
                                                    {/* <img src="%PUBLIC_URL%/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" /> */}
                                                </div>
                                                <h4>
                                                    Support Team
                                                    <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                                </h4>
                                                <p>Why not buy a new awesome theme?</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="footer"><a href="#">See All Messages</a></li>
                            </ul>
                        </li>

                        {/* Notifications Dropdown */}
                        <li className="dropdown notifications-menu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-bell-o"></i>
                                <span className="label label-warning">10</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="header">You have 10 notifications</li>
                                <li>
                                    <ul className="menu">
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-users text-aqua"></i> 5 new members joined today
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="footer"><a href="#">View all</a></li>
                            </ul>
                        </li>

                        {/* Tasks Dropdown */}
                        <li className="dropdown tasks-menu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-flag-o"></i>
                                <span className="label label-danger">9</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="header">You have 9 tasks</li>
                                <li>
                                    <ul className="menu">
                                        <li>
                                            <a href="#">
                                                <h3>
                                                    Design some buttons
                                                    <small className="pull-right">20%</small>
                                                </h3>
                                                <div className="progress xs">
                                                    <div className="progress-bar progress-bar-aqua" style={{ width: "20%" }} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                        <span className="sr-only">20% Complete</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="footer">
                                    <a href="#">View all tasks</a>
                                </li>
                            </ul>
                        </li>

                        {/* User Account Dropdown */}
                        <li className="dropdown user user-menu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <span className="hidden-xs">Username</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="user-footer">
                                    <div className="pull-left">
                                        <a href="#" className="btn btn-default btn-flat">Profile</a>
                                    </div>
                                    <div className="pull-right">
                                        <a href="#" className="btn btn-default btn-flat">Sign out</a>
                                    </div>
                                </li>
                            </ul>
                        </li>

                        {/* Login Button */}
                        <li>
                            <Link to="/login">
                                <i className="text-dark" style={{ position: "relative", color: "black" }}>Login</i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            </header>
            <aside className="main-sidebar">
                {/* <!-- sidebar: style can be found in sidebar.less --> */}
                <section className="sidebar">
                    {/* <!-- Sidebar user panel --> */}
                    <div className="user-panel">
                        <div className="pull-left image">
                            {/* <img src="%PUBLIC_URL%/dist/img/IMG_6799.JPG" className="img-circle" alt="User Image" /> */}
                        </div>
                        <div className="pull-left info">
                            <p>Trần Lê Anh Quân</p>

                            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>
                    {/* <!-- search form --> */}
                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                            <input type="text" name="q" className="form-control" placeholder="Search..." />
                            <span className="input-group-btn">
                                <button type='submit' name='search' id='search-btn' className="btn btn-flat"><i className="fa fa-search"></i></button>
                            </span>
                        </div>
                    </form>
                    {/* <!-- /.search form --> */}
                    {/* <!-- sidebar menu: : style can be found in sidebar.less --> */}
                    <ul className="sidebar-menu">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="active treeview">
                            <a>
                                <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                            </a>
                        </li>
                        <li className="treeview">
                            <Link to="/manageMovies" >
                                <i className="fa fa-dashboard"></i> <span>Danh sách phim</span>
                            </Link>
                        </li>
                        <li className="treeview">
                            <Link to="/workShedule">
                                <i className="fa fa-dashboard"></i> <span>Lịch làm việc</span>
                            </Link>
                        </li>
                        <li className="treeview">
                            <Link to="/employee" >
                                <i className="fa fa-dashboard"></i> <span>Danh sách nhân viên</span>
                            </Link>
                        </li>
                        <li className="treeview">
                            <Link to="/workSheduleEmployee" >
                                <i className="fa fa-dashboard"></i> <span>Danh sách ca trực</span>
                            </Link>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-files-o"></i>
                                <span>Layout Options</span>
                                <span className="label label-primary pull-right">4</span>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="%PUBLIC_URL%/pages/layout/top-nav.html"><i className="fa fa-circle-o"></i> Top Navigation</a></li>
                                <li><a href="%PUBLIC_URL%/pages/layout/boxed.html"><i className="fa fa-circle-o"></i> Boxed</a></li>
                                <li><a href="%PUBLIC_URL%/pages/layout/fixed.html"><i className="fa fa-circle-o"></i> Fixed</a></li>
                                <li><a href="%PUBLIC_URL%/pages/layout/collapsed-sidebar.html"><i className="fa fa-circle-o"></i> Collapsed Sidebar</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="%PUBLIC_URL%/pages/widgets.html">
                                <i className="fa fa-th"></i> <span>Widgets</span> <small className="label pull-right bg-green">new</small>
                            </a>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-pie-chart"></i>
                                <span>Charts</span>
                                <i className="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="%PUBLIC_URL%/pages/charts/morris.html"><i className="fa fa-circle-o"></i> Morris</a></li>
                                <li><a href="%PUBLIC_URL%/pages/charts/flot.html"><i className="fa fa-circle-o"></i> Flot</a></li>
                                <li><a href="%PUBLIC_URL%/pages/charts/inline.html"><i className="fa fa-circle-o"></i> Inline charts</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-laptop"></i>
                                <span>UI Elements</span>
                                <i className="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="%PUBLIC_URL%/pages/UI/general.html"><i className="fa fa-circle-o"></i> General</a></li>
                                <li><a href="%PUBLIC_URL%/pages/UI/icons.html"><i className="fa fa-circle-o"></i> Icons</a></li>
                                <li><a href="%PUBLIC_URL%/pages/UI/buttons.html"><i className="fa fa-circle-o"></i> Buttons</a></li>
                                <li><a href="%PUBLIC_URL%/pages/UI/sliders.html"><i className="fa fa-circle-o"></i> Sliders</a></li>
                                <li><a href="%PUBLIC_URL%/pages/UI/timeline.html"><i className="fa fa-circle-o"></i> Timeline</a></li>
                                <li><a href="%PUBLIC_URL%/pages/UI/modals.html"><i className="fa fa-circle-o"></i> Modals</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-edit"></i> <span>Forms</span>
                                <i className="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="%PUBLIC_URL%/pages/forms/general.html"><i className="fa fa-circle-o"></i> General Elements</a></li>
                                <li><a href="%PUBLIC_URL%/pages/forms/advanced.html"><i className="fa fa-circle-o"></i> Advanced Elements</a></li>
                                <li><a href="%PUBLIC_URL%/pages/forms/editors.html"><i className="fa fa-circle-o"></i> Editors</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-table"></i> <span>Tables</span>
                                <i className="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="%PUBLIC_URL%/pages/tables/simple.html"><i className="fa fa-circle-o"></i> Simple tables</a></li>
                                <li><a href="%PUBLIC_URL%/pages/tables/data.html"><i className="fa fa-circle-o"></i> Data tables</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="%PUBLIC_URL%/pages/calendar.html">
                                <i className="fa fa-calendar"></i> <span>Calendar</span>
                                <small className="label pull-right bg-red">3</small>
                            </a>
                        </li>
                    </ul>
                </section>
                {/* <!-- /.sidebar --> */}
            </aside>
        </div>
    );
}
