import SectionContainer from '@/components/shared/SectionContainer';
import GridList from '@/components/shared/list/GridList';
import Card from '@/components/shared/Card';

export default function Section({ heading, featuredDestinations }) {
  return (
    <SectionContainer heading={heading}>
      <GridList>
        {featuredDestinations.map((destination) => (
          <Card
            key={destination?._id}
            content={destination?.card}
            linkURL={`destinations/${destination?.slug}`}
          />
        ))}
      </GridList>
    </SectionContainer>
  );
}
