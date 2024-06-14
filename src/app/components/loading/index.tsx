import { ActivityIndicator} from 'react-native'
import { styles } from './styles';


const Loading = () => {
    return ( 
        <ActivityIndicator style={styles.loading} />
     );
}
 
export default Loading;