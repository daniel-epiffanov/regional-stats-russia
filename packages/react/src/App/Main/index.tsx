import { FC } from 'react';
import { AnnualStatsProvider } from '../../context/AnnualStatsContext';
import { useCategoriesMenuContext } from '../../context/CategoriesMenuContext';
import { MapProvider } from '../../context/MapContext';
import { useRegionNamesContext } from '../../context/RegionNamesContext';
import { YearsProvider } from '../../context/YearsContext';
import AnnualStats from './AnnualStats';
import Controls from './Controls';
import styles from './Main.module.scss';
import VectorMap from './VectorMap';

const Main: FC = () => {
  const {regionType} = useRegionNamesContext();
  const {curCategoryNames} = useCategoriesMenuContext();
  const {curMainCategoryName, curSubCategoryName, curSubSubCategoryName} = curCategoryNames;

  return (
    <div className={styles['root']}>
      <AnnualStatsProvider
        regionType={regionType}
        curMainCategoryName={curMainCategoryName}
        curSubCategoryName={curSubCategoryName}
        curSubSubCategoryName={curSubSubCategoryName}
      >
        <YearsProvider
          regionType={regionType}
          curMainCategoryName={curMainCategoryName}
          curSubCategoryName={curSubCategoryName}
          curSubSubCategoryName={curSubSubCategoryName}
        >
          <AnnualStats />
          <Controls />
          <MapProvider regionType={regionType}>
            <VectorMap />
          </MapProvider>
        </YearsProvider>
      </AnnualStatsProvider>
    </div>
    
  );
};

export default Main;