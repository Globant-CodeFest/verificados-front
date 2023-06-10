import React from "react";
import { Text, TouchableOpacity } from "react-native";
// import Icon from "./Icon";
import styles, { DARK_GRAY } from "../assets/styles";

import { useNavigation } from '@react-navigation/native';

const Filters = () => {
  const navigation = useNavigation();
 return (
  <TouchableOpacity style={styles.filters} onPress={() => navigation.navigate('Inicio')} >
    <Text style={styles.filtersText}>
      Atras
    </Text>
  </TouchableOpacity>
 )
};

export default Filters;
