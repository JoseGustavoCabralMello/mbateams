import { Header } from '@components/Header';
import { Container } from './styles';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { useState } from 'react';
import { FlatList } from 'react-native';

export function Groups() {
  const [grous, setGroups] = useState<string[]>(['Galera da Rocket']);

  return (
    <Container>
      <Header/>
      
      <Highlight 
         title="Turmas"
         subtitle="jogue com sua turma"
       />

      <FlatList
        data={grous}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
          />
        )}
      />
    </Container>
  );
}
