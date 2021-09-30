package com.exam.ExamManegmentSystem.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "user")
public class User {

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private long id;
		
		@Column(name = "user_role")
		private String user_role;
		
		@Column(name = "first_name")
		private String firstName;

		@Column(name = "last_name")
		private String lastName;
		
		@Column(name = "email_id")
		private String emailId;
		
		@Column(name = "password")
		private String password;
		
		@Column(name = "confirm_password")
		private String confirm_password;
		
		@Column(name = "contact_number")
		private String contact_number;
		
		//@OneToMany(mappedBy="id")
	   // private int ans;
		

		public User(long id, String user_role, String firstName, String lastName, String emailId, String password,
				String confirm_password, String contact_number) {
			super();
			this.id = id;
			this.user_role = user_role;
			this.firstName = firstName;
			this.lastName = lastName;
			this.emailId = emailId;
			this.password = password;
			this.confirm_password = confirm_password;
			this.contact_number = contact_number;
		}
		public User(String emailId, String password) {
			super();
			this.emailId = emailId;
			this.password = password;
		}

		public long getId() {
			return id;
		}

		public void setId(long id) {
			this.id = id;
		}

		public String getUser_role() {
			return user_role;
		}

		public void setUser_role(String user_role) {
			this.user_role = user_role;
		}

		public String getFirstName() {
			return firstName;
		}

		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}

		public String getLastName() {
			return lastName;
		}

		public void setLastName(String lastName) {
			this.lastName = lastName;
		}

		public String getEmailId() {
			return emailId;
		}

		public void setEmailId(String emailId) {
			this.emailId = emailId;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		public String getConfirm_password() {
			return confirm_password;
		}

		public void setConfirm_password(String confirm_password) {
			this.confirm_password = confirm_password;
		}

		public String getContact_number() {
			return contact_number;
		}

		public void setContact_number(String contact_number) {
			this.contact_number = contact_number;
		}

		public User() {
		
		}

		@Override
		public String toString() {
			return "User [id=" + id + ", user_role=" + user_role + ", firstName=" + firstName + ", lastName=" + lastName
					+ ", emailId=" + emailId + ", password=" + password + ", confirm_password=" + confirm_password
					+ ", contact_number=" + contact_number + "]";
		}
		
		
		
		
}
