//import {Permissions, Notifications} from 'expo'
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions'


export const subscribeToPushNotifications = () => {
    Permissions.getAsync(Permissions.NOTIFICATIONS).then(existingPermission => {
        if(existingPermission.status !== "granted") {
            Permissions.askAsync(Permissions.NOTIFICATIONS).then(permission => {
                if(permissions.status != "granted") {
                    console.log("nope permission.status", permission.status);
                    return;
                } else {
                    Notifications.getExpoPushTokenAsync().then(token => {
                        console.log("le token : ", token);
                        axios.get("https://react-native-notification-push.herokuapp.com/?token="+ token).then(axiosResponse => {
                            console.log("la réponse : ", axiosResponse.data);

                        });
                    });
                }
            });
        }else {
            Notifications.getExpoPushTokenAsync().then(token => {
                console.log("le token : ", token);
                axios.get("https://react-native-notification-push.herokuapp.com/?token="+ token).then(axiosResponse => {
                    console.log("la réponse : ", axiosResponse.data);

                });
            });
        }
    })
}