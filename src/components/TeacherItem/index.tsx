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
                    source={{ uri: 'https://github.com/andredavid1.png' }}
                    style={styles.avatar}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>André David</Text>
                    <Text style={styles.subject}>Português</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Bacharel em Sistemas de Informação e Pós-Graduado em Docência no Ensino Superior.
                {'\n'}{'\n'}
                Apaixonado por leitura. Leciono português nas horas de folga.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora { ' ' }
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;
