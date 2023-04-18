type RegionListItemProps = {
    region: string
    filterByRegion: (region: string) => void
}

export const RegionListItem = ({ region, filterByRegion }: RegionListItemProps) => 
    <li key={region} className='cursor-pointer' onClick={() => filterByRegion(region)} data-testid={`region-filter-${region}`}>{region}</li> 