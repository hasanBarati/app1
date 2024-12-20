import { View, Text, StyleSheet, ImageSourcePropType, Image, Pressable, Button } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'
import DiceOne from '../assets/images/One.png'
import DiceTwo from '../assets/images/Two.png'
import DiceThree from '../assets/images/Three.png'
import DiceFour from '../assets/images/Four.png'
import DiceFive from '../assets/images/Five.png'
import DiceSix from '../assets/images/Six.png'
import * as Haptics from 'expo-haptics';


type DiceProps=PropsWithChildren<{
    imageUrl:ImageSourcePropType
}>

const Dice = ({imageUrl}: DiceProps):JSX.Element => {
    return (
      <View >
        <Image style={styles.diceImage} source={imageUrl} />
      </View>
    )
  }
const RollDice = () => {
    const [diceImage,setDiceImage]=useState<ImageSourcePropType>(DiceOne)


    const roll=()=>{
        const randoNumber=Math.floor(Math.random() * 6)+1
    
        switch(randoNumber){
            case 1:setDiceImage(DiceOne) 
             break;
            case 2:setDiceImage(DiceTwo)
            break;
            case 3:setDiceImage(DiceThree)
            break;
            case 4:setDiceImage(DiceFour)
            break;
            case 5:setDiceImage(DiceFive)
            break;
            case 6:setDiceImage(DiceSix)
        }
    }

    
  return (
    <View style={styles.container}>
     <Dice imageUrl={diceImage}/>
     <Button
          title="Success"
          onPress={
            () =>
              Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Success
              )
          }
        />
     <Pressable
       onPress={roll}
     >
        <Text style={styles.rollDiceBtnText}>Roll</Text>
     </Pressable>
    </View>
  )
}


export default RollDice


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFF2F2',
    },
    diceContainer: {
      margin: 12,
    },
    diceImage: {
      width: 200,
      height: 200,
    },
    rollDiceBtnText: {
      paddingVertical: 10,
      paddingHorizontal: 40,
      borderWidth: 2,
      borderRadius: 8,
      borderColor: '#E5E0FF',
      fontSize: 16,
      color: '#8EA7E9',
      fontWeight: '700',
      textTransform: 'uppercase',
    },
  });