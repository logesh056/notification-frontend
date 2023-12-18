import React, { useEffect, useState } from "react";
import { NavLink, Toast } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { add, removeFromToastList } from "../../store/deliveredNotifs";
import { useNavigate } from "react-router-dom";
import { ToastComponent } from "../ToastComponent/ToastComponent";
import { BASE_URL } from "../../constants";

export const NavbarComponent = () => {
  const user = useSelector((state) => state.auth.value.user);
  const allDeliveredNotifs = useSelector(
    (state) => state.deliveredNotifs.value.notifs
  );

  const notifToastList = useSelector(
    (state) => state.deliveredNotifs.value.notifToastList
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let url = BASE_URL + "/push-notifications/" + user.id + "?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJhcGk6Ly9mOTJkZGIwNS1iNzVjLTQ0NTktOTEwZi03M2M1OGQ3NWY1ZjUiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9iNGQzNGU0Mi03OWE2LTQ3OGUtYjNhZi0xMmNlNzMxMWZhMDkvIiwiaWF0IjoxNzAxMDgyNTU5LCJuYmYiOjE3MDEwODI1NTksImV4cCI6MTcwMTA4Nzg2MywiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhWQUFBQXhmZDhWZkxKeWUyaGU1dStlTTUrSi9BU2FSQU4vWTFDVyszQmxLbGFDZm5XazZGeUE0L2c3QWJmZjRpSTgrRGMiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiZjkyZGRiMDUtYjc1Yy00NDU5LTkxMGYtNzNjNThkNzVmNWY1IiwiYXBwaWRhY3IiOiIxIiwiaXBhZGRyIjoiMjAuNzIuMTMyLjE5NCIsIm5hbWUiOiJsb2dlc2giLCJvaWQiOiI3YTExNWEzZS01NDUyLTQxNzktODc4NC1jZDczMjQxZTMyZWMiLCJyaCI6IjAuQWJjQVFrN1R0S1o1amtlenJ4TE9jeEg2Q1FYYkxmbGN0MWxFa1E5enhZMTE5ZlhKQUg4LiIsInJvbGVzIjpbIkFETUlOIl0sInNjcCI6ImVuY2lwaGVyaGVhbHRoLW11bHRpdGVuYW50LnNjb3BlIiwic3ViIjoidHkzRmt1Y0Q5Z2xFQ3hVX1lvNjBUYVFlcVNvcmxucmIzNjFUT3FsZXNUTSIsInRpZCI6ImI0ZDM0ZTQyLTc5YTYtNDc4ZS1iM2FmLTEyY2U3MzExZmEwOSIsInVuaXF1ZV9uYW1lIjoibG9nZXNoMDFAZW5jaXBoZXJoZWFsdGgub25taWNyb3NvZnQuY29tIiwidXBuIjoibG9nZXNoMDFAZW5jaXBoZXJoZWFsdGgub25taWNyb3NvZnQuY29tIiwidXRpIjoiRFljS1p4TVMzME8ySlF1cHp3dEtBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.j9kc8JN6xDzREm-l8uNgR-58Ngz8FnFRao1-IN48_goPyH7bnIXTOZoxrmK73_myBwtKh9Vj_FBsjBkp7OiYq3Op3cCvtZL3kJmCjmJEZD2XVQ8TwuqivGVvnb81JI_HvoTKPWENzAyqcfoTIfAuErSSZQE2pyG-iikzZno2ek2xFSf1Gytm7fcpn2BSNXJnJ9NYscqNo2o-1gav175cQax4DSodL1daCzMIEXx7MsBF4m3TsfNVAOIQZnuKbtN3XHR0dhTxd74exqnpEflGOWVLzRoz2_zv34Y2YHaqrshVIHOeHdaNq473QdsEoB4T0A6JV4vLa7vTo_Jkjgavxg";
    const sse = new EventSource(url, { headers: { 'X-Tenant': 'default' } });

    sse.addEventListener("user-list-event", (event) => {
      const data = JSON.parse(event.data);
      dispatch(add({ newNotifs: data }));
    });

    sse.onerror = () => {
      sse.close();
    };
    return () => {
      sse.close();
    };
  }, []);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Post Sharing</Navbar.Brand>
        <div className="d-flex ">
          <NavLink>
            <Button onClick={() => navigate("/home")} variant="dark">
              Home
            </Button>
          </NavLink>
          <NavLink>
            <Button onClick={() => navigate("/notif")} variant="primary">
              Notifications
              <Badge style={{ marginLeft: 15 }} bg="dark">
                {allDeliveredNotifs.length}
              </Badge>
            </Button>
          </NavLink>
          <NavLink>
            <h4>{"@" + user.userName}</h4>
          </NavLink>
        </div>
      </Container>
      <div
        style={{
          position: "absolute",
          zIndex: 99,
          top: 80,
          right: 20,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {notifToastList.map((x, index) => (
          <ToastComponent notif={x} />
        ))}
      </div>
    </Navbar>
  );
};
