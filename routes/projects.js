const routes = require('express').Router();
const Sequelize = require('sequelize');
const nodemailer = require("nodemailer");
const Op = Sequelize.Op;

const {Sales,Invoices, Users} = require('../functions/associations/salesAssociations')




module.exports = routes;