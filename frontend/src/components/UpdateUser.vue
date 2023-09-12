<!-- <template>
    <div>
      <button
        type="button"
        class="btn edit-users-btn"
        @click="openEditModal(user.userID)"
        data-bs-toggle="modal"
        :data-bs-target="'#edit-user-modal' + user.userID"
      >
        Edit
      </button>
      <div
      class="modal"
      :id="'edit-user-modal' + user.userID"
      aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content blue-bg">
          <div class="modal-header">
            <h1 class="modal-title text-center heading-text">Update User:</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">First Name :</label>
              <input type="text" class="form-control" v-model="editUser.firstName" />
            </div>
            <div class="mb-3">
              <label class="form-label">Last Name :</label>
              <input type="text" class="form-control" v-model="editUser.lastName" />
            </div>
            <div class="mb-3">
              <label class="form-label">Email :</label>
              <input type="text" class="form-control" v-model="editUser.emailAdd" />
            </div>
            <div class="mb-3">
              <label class="form-label">Password :</label>
              <input type="text" class="form-control" v-model="editUser.userPass" />
            </div>
            <div class="mb-3">
              <label class="form-label">Profile Image :</label>
              <input type="text" class="form-control" v-model="editUser.userImg" />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn edit-user-btn"
              @click="updateUser(user.userID)"
            >
              Update
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    props: ["user"],
    data() {
      return {
        editUser: {
          ...this.user,
        },
        editUserID: null,
        user: {
          firstName: "",
          lastName: "",
          emailAdd: "",
          userPass: "",
          userImg: "",
        },
      };
    },
    computed: {
      currentUser() {
        return this.$store.state.user;
      },
    },
    methods: {
      openEditModal(userID) {
        this.editUserID = userID;
        this.editUser = {
          ...this.$store.state.users.find((user) => user.userID === userID),
        };
      },
      updateProduct(userID) {
        this.$store
          .dispatch("updateUser", {
            userID: userID,
            data: { ...this.editUser },
          })
          .then(() => {
            console.log("User updated!");
            setTimeout(() => {
              window.location.reload();
            }, 500);
          })
          .catch((err) => {
            console.error("Error updating: ", err);
          });
      },
    },
  };
  </script>
  <style scoped>
  .blue-bg {
    background: #0A192F;
  }
  .heading-text {
    color: #FFD700;
    font-family: "Montserrat Alternates", sans-serif;
  }
  .edit-users-btn {
    background: #2D1128;
    color: #FFD700;
    border: 1px solid #FFD700;
    padding: 5px;
  }
  .edit-users-btn:hover {
    background: #FFD700;
    color: #2D1128;
    border: 1px solid #2D1128;
  }
  .edit-user-btn {
    background: #0A192F;
    color: #FFD700;
    border: 3px solid #0A192F;
  }
  .edit-user-btn:hover {
    border: 3px solid #FFD700;
  }
  .modal-content {
    border: 2px solid #FFD700;
  }
  </style> -->