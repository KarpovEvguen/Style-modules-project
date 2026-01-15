import {
    Section,
    Title,
    List,
    Item,
    Label,
    Percentage,
  } from './Statistics.styled';
  
  const colors = ['#4fc3f7', '#ab47bc', '#ef5350', '#26c6da', '#4B8F8C'];
  
  const Statistics = ({ title, stats }) => {
    return (
      <Section className="statistics">
        {title && <Title className="title">{title}</Title>}
  
        <List className="stat-list">
          {stats.map(({ id, label, percentage }, index) => (
            <Item
              key={id}
              className="item"
              bg={colors[index % colors.length]}
            >
              <Label className="label">{label}</Label>
              <Percentage className="percentage">
                {percentage}%
              </Percentage>
            </Item>
          ))}
        </List>
      </Section>
    );
  };
  
  export default Statistics;
  