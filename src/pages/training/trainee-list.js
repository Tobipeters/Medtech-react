import React, { forwardRef, useState, useEffect } from "react";
import MaterialTable from "material-table";
import AppNav from "../../components/nav";
import Footer from "../../components/footer";

import db from "../../config/firebase";
import { onSnapshot, collection, addDoc } from "@firebase/firestore";
import Loader from "../../components/loader";

// Table Icons
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const TraineeList = () => {
  const [trainee, setTrainee] = useState({});
  const [loading, setLoading] = useState(false);

  console.log(trainee);

  useEffect(() => {
    setLoading(true);
    onSnapshot(collection(db, "trainingRegistration"), (snapshot) => {
      const trainee_data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTrainee(trainee_data);
      setLoading(false);
    });
  }, []);

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  const columns = [
    { title: "Training Name", field: "training_name" },
    { title: "Organisation", field: "name_of_organisation" },
    { title: "Attendee Name", field: "attendee_name" },
    { title: "Position", field: "position" },
    { title: "Qualification", field: "qualification" },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
    { title: "Date of birth", field: "dob" },
    { title: "Sex", field: "sex" },
    { title: "Amount paid", field: "amount_paid" },
    { title: "Payment Date", field: "payment_date" },
    { title: "Depositor name", field: "depositor_name" },
  ];



  return (
    <div>
      <AppNav />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="container py-5">
            <MaterialTable
              title="Trainee List"
              icons={tableIcons}
              columns={columns}
              data={trainee}
              options={{
                exportButton: true,
                search: true
            }}
            />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default TraineeList;
