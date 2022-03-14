import { styled } from '@/styles/index';

const Title = styled('h1', {
  color: '$hiContrast',
});

export default function Home() {
  return <Title>Personal Project</Title>;
}
