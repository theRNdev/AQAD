import {Alert} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
import navigationStrings from '../constants/navigationStrings';
let db = openDatabase({name: 'UserDatabase.db'});

// This function use for  create Database
export const craeteDB=()=>{
    db.transaction(txn => {
        txn.executeSql(
          "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
          [],
          (tx, res) => {
            if (res.rows.length == 0) {
              txn.executeSql('DROP TABLE IF EXISTS table_user', []);
              txn.executeSql(
                'CREATE TABLE IF NOT EXISTS table_user(uid VARCHAR(100), firstName VARCHAR(20),lastName VARCHAR(20),phoneNumber  VARCHAR(20), email VARCHAR(50), password VARCHAR(100),createdAt INTEGER)',
                [],
              );
            }
          },
          error => {
            console.log(error);
          },
        );
      });
}

// This function use for insert users to local Database
export const insertData = (
  uid,
  firstName,
  lastName,
  phoneNumber,
  email,
  password,
  callback,
) => {
  db.transaction(function (tx) {
    tx.executeSql(
      'INSERT INTO table_user (uid,firstName,lastName,phoneNumber, email, password,createdAt) VALUES (?,?,?,?,?,?,?)',
      [uid, firstName, lastName, phoneNumber, email, password, Date.now()],
      (tx, results) => {
        if (results.rowsAffected > 0) {
          let success = true;
          callback(null, success);
        } else {
          callback('Registration Failed');
        }
      },
      error => {
        console.log(error);
      },
    );
  });
};

// This function use for delete users from local Database
export let deleteUser = id => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM  table_user where uid=?',
        [id],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            resolve('User deleted successfully');
          } else {
            reject('Please insert a valid User Id');
          }
        },
      );
    });
  });
};

// This function use for update user data
export const updateUser = (
  firstName,
  lastName,
  phoneNumber,
  uid,
  navigation,
  callback,
) => {
  db.transaction(tx => {
    tx.executeSql(
      'UPDATE table_user set firstName=?, lastName=? , phoneNumber=? where uid=?',
      [firstName, lastName, phoneNumber, uid],
      (tx, results) => {
        if (results.rowsAffected > 0) {
          let success = true;
          callback(null, success);
          Alert.alert(
            'Success',
            'User updated successfully',
            [
              {
                text: 'Ok',
                onPress: () => navigation.navigate(navigationStrings.DASHBOARD),
              },
            ],
            {cancelable: false},
          );
        } else {
          callback('Updation Failed');
          alert('Updation Failed');
        }
      },
    );
  });
};

// This function use for get single user from DB
export const getUserById = (userId, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM table_user WHERE uid = ?',
      [userId],
      (tx, results) => {
        if (results.rows.length > 0) {
          const user = results.rows.item(0);
          callback(null, user);
        } else {
          callback('No user found with that ID');
        }
      },
      (tx, error) => {
        callback(error);
      },
    );
  });
};

// This function use for all users list 
// export const getData = (id) => {
//     return new Promise((resolve, reject) => {
//       db.transaction(tx => {
//         tx.executeSql('SELECT * FROM table_user', [], (tx, results) => {
//           const data = [];
//           for (let i = 0; i < results.rows.length; ++i) {
//             data.push(results.rows.item(i));
//           }
          
//           resolve(data);
//         }, (tx, error) => {
//           reject(error);
//         });
//       });
//     });
//   };

export const getData = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM table_user', [], (tx, results) => {
        const data = [];
        for (let i = 0; i < results.rows.length; ++i) {
          data.push(results.rows.item(i));
        }

        // Find the index of the matching user
        const userIndex = data.findIndex(user => user.uid === id);

        // If a matching user is found, move it to the 0 index
        if (userIndex !== -1) {
          const [matchingUser] = data.splice(userIndex, 1);
          data.unshift(matchingUser);
        }

        resolve(data);
      }, (tx, error) => {
        reject(error);
      });
    });
  });
};