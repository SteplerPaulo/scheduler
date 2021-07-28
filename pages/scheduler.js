import React, { Fragment, useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import ButtonGroup from "../components/buttonGroup";
import Card from "../components/card";
import PopOver from "../components/popover";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

import grey from "@material-ui/core/colors/grey";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tableCell: {
    border: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(1),
    minWidth: 120,
    height: 28,
    "&:hover": {
      backgroundColor: grey[800],
    },
  },
  tableContainer: {
    maxWidth: 1280,
    overflow: "auto",
  },
}));

export default function Home() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(null);
  const [date, setDate] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (e) => {
    console.log(e.target.dataset.date);
    console.log(e.target.dataset.time);

    setDate(e.target.dataset.date);
    setTime(e.target.dataset.time);
    setOpen(true);
  };

  const handleClick = (e) => {
    console.log(e.currentTarget);

    setDate(e.target.dataset.date);
    setTime(e.target.dataset.time);
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Layout home>
      <Head>
        <title>Scheduler</title>
      </Head>
      <section>
        <ButtonGroup />
        <PopOver
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          date={date}
          time={time}
        />
        <TableContainer className={classes.tableContainer}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Time</TableCell>
                {daysIn.July.map((obj, index) => (
                  <TableCell
                    key={index}
                    align="center"
                    className={classes.tableCell}
                  >
                    <Typography variant="h5" component="subtitle1">
                      {obj.date}
                    </Typography>
                    <Typography variant="caption" component="subtitle1">
                      {" " + obj.dateALias}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {timePerHour.map((time) => (
                <Fragment key={time.time}>
                  <TableRow>
                    <TableCell rowSpan={5} className={classes.tableCell}>
                      {time.time}
                    </TableCell>
                  </TableRow>
                  <Fragment>
                    <TableRow>
                      {daysIn.July.map((obj, index) => (
                        <TableCell
                          key={index + 0}
                          className={classes.tableCell}
                          onClick={handleClick}
                          data-time={
                            time.time.split(" ")[0] +
                            ":00 " +
                            time.time.split(" ")[1]
                          }
                          data-date={obj.date}
                        >
                          <Card />
                        </TableCell>
                      ))}
                    </TableRow>
                    <TableRow>
                      {daysIn.July.map((obj, index) => (
                        <TableCell
                          key={index + 15}
                          className={classes.tableCell}
                          onClick={handleClick}
                          data-data={
                            time.time.split(" ")[0] +
                            ":15 " +
                            time.time.split(" ")[1]
                          }
                        ></TableCell>
                      ))}
                    </TableRow>
                    <TableRow>
                      {daysIn.July.map((obj, index) => (
                        <TableCell
                          key={index + 30}
                          className={classes.tableCell}
                          onClick={handleClick}
                          data-data={
                            time.time.split(" ")[0] +
                            ":30 " +
                            time.time.split(" ")[1]
                          }
                        ></TableCell>
                      ))}
                    </TableRow>
                    <TableRow>
                      {daysIn.July.map((obj, index) => (
                        <TableCell
                          key={index + 45}
                          className={classes.tableCell}
                          onClick={handleClick}
                          data-data={
                            time.time.split(" ")[0] +
                            ":45 " +
                            time.time.split(" ")[1]
                          }
                        ></TableCell>
                      ))}
                    </TableRow>
                  </Fragment>
                </Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </Layout>
  );
}

var getDaysInMonth = function (month, year) {
  // Here January is 1 based
  //Day 0 is the last day in the previous month
  return new Date(year, month, 0).getDate();
  // Here January is 0 based
  // return new Date(year, month+1, 0).getDate();
};

function getRemanningDays() {
  const date = new Date();
  const time = new Date(date.getTime());
  time.setMonth(date.getMonth() + 1);
  time.setDate(0);
  return time.getDate() > date.getDate() ? time.getDate() - date.getDate() : 0;
}

function today() {
  const today = new Date();
  // return today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  return today.getDate();
}

function days(month, year) {
  return new Date(year, month, 0).getDate();
}

const daysIn = {
  July: [
    { date: "01", dateALias: "Thursday" },
    { date: "02", dateALias: "Friday" },
    { date: "03", dateALias: "Saturday" },
    { date: "04", dateALias: "Sunday" },
    { date: "05", dateALias: "Monday" },
    { date: "06", dateALias: "Tuesday" },
    { date: "07", dateALias: "Wednesday" },
    { date: "08", dateALias: "Thursday" },
    { date: "09", dateALias: "Friday" },
    { date: "10", dateALias: "Saturday" },
    { date: "11", dateALias: "Sunday" },
    { date: "12", dateALias: "Monday" },
    { date: "13", dateALias: "Tuesday" },
    { date: "14", dateALias: "Wednesday" },
    { date: "15", dateALias: "Thursday" },
    { date: "16", dateALias: "Friday" },
    { date: "17", dateALias: "Saturday" },
    { date: "18", dateALias: "Sunday" },
    { date: "19", dateALias: "Monday" },
    { date: "20", dateALias: "Tuesday" },
    { date: "21", dateALias: "Wednesday" },
    { date: "22", dateALias: "Thursday" },
    { date: "23", dateALias: "Friday" },
    { date: "24", dateALias: "Saturday" },
    { date: "25", dateALias: "Sunday" },
    { date: "26", dateALias: "Monday" },
    { date: "27", dateALias: "Tuesday" },
    { date: "28", dateALias: "Wednesday" },
    { date: "29", dateALias: "Thursday" },
    { date: "30", dateALias: "Friday" },
    { date: "31", dateALias: "Saturday" },
  ],
};

const timePerHour = [
  { time: "1 AM" },
  { time: "2 AM" },
  { time: "3 AM" },
  { time: "4 AM" },
  { time: "5 AM" },
  { time: "6 AM" },
  { time: "7 AM" },
  { time: "8 AM" },
  { time: "9 AM" },
  { time: "10 AM" },
  { time: "11 AM" },
  { time: "12 NN" },
  { time: "1 PM" },
  { time: "2 PM" },
  { time: "3 PM" },
  { time: "4 PM" },
  { time: "5 PM" },
  { time: "6 PM" },
  { time: "7 PM" },
  { time: "8 PM" },
  { time: "9 PM" },
  { time: "10 PM" },
  { time: "11 PM" },
  { time: "12 MN" },
];
