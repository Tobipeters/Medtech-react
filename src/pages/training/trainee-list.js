import React from "react";
// import MaterialTable from "material-table";

const TraineeList = () => {
  const columns = [
    { title: "Training Name", field: "training_name" },
    { title: "Organisation", field: "name_of_organisation" },
    { title: "Attendee Name", field: "attendee_name" },
    { title: "Position", field: "position" },
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
      {/* <MaterialTable title="trainee List" columns={columns} /> */}
    </div>
  );
};

export default TraineeList;
