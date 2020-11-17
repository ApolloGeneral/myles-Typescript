import * as React from 'react';
import { Image, ScrollView, Text, View } from "react-native"
import { styles } from '../../../../styles/styles';

import { ICompany } from '../../../../types/types';

interface IProps {
    company: ICompany
}



export default ({ company }: IProps) => {

    const price1K = company.prePrice / (company.quantity / 1000)


    return (
        <>
            {company.active && (
                <View style={styles.CardContext}>
                    <View style={styles.ViewImageCard}
                    >
                        <Image
                            source={{ uri: company.logo }}
                            style={styles.ImageCard}
                            
                        />
                    </View>
                    <View style={styles.ViewTextCard}>
                        <Text style={styles.TextCard}>
                            <Text style={{ fontWeight: "bold" }}>Nome:</Text> {company.name}
                        </Text>
                        <Text style={styles.TextCard}>
                            <Text style={{ fontWeight: "bold" }}>Preço pré-venda:</Text> {company.prePrice}
                        </Text>
                        <Text style={styles.TextCard}>
                            <Text style={{ fontWeight: "bold" }}>Preço pós-venda:</Text> {company.posPrice}
                        </Text>
                        <Text style={styles.TextCard}>
                            <Text style={{ fontWeight: "bold" }}>Preço por milheiro:</Text> {price1K}
                        </Text>
                    </View>
                </View>
            )}
        </>
    )
}