import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/login', {
  name: 'Login_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Login_Page' });
  },
});

FlowRouter.route('/user-home-page/:_id', {
  name: 'User_Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'User_Home_Page' });
  },
});

FlowRouter.route('/browse-clubs', {
  name: 'Browse_Clubs',
  action() {
    BlazeLayout.render('App_Body', { main: 'Browse_Clubs' });
  },
});

FlowRouter.route('/terms-and-conditions', {
  name: 'Terms_And_Conditions',
  action() {
    BlazeLayout.render('App_Body', { main: 'Terms_And_Conditions' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
