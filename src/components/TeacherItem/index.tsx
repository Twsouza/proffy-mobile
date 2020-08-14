import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{uri: 'https://github.com/Twsouza.png'}}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Taynan Souza</Text>
          <Text style={styles.subject}>PQP</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus possimus saepe nihil laudantium deleniti quasi, ipsum hic sunt sint harum pariatur vel. Illum error officiis nemo voluptatibus vero repellat accusamus.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>
            R$ 20,00
          </Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            style={[styles.favoriteButton, styles.favorited]}
          >
            {/*<Image source={heartOutlineIcon}/>*/}
            <Image source={unfavoriteIcon}/>
          </RectButton>

          <RectButton
            style={styles.contactButton}
          >
            <Image source={whatsappIcon}/>
            <Text style={styles.contactButtonText}>
              Entrar em contato
            </Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem;