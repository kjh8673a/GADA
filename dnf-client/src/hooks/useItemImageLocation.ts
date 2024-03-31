const location = {
  x: 0,
  y: 0,
};

const useItemImageLocation = () => {
  const TalismanLocation = (idx: number): number[] => {
    if (idx === 0) {
      location.x = 34.1;
      location.y = 45.3;
      return [location.x, location.y];
    }
    if (idx === 1) {
      location.x = 51.3;
      location.y = 35.3;
      return [location.x, location.y];
    }
    if (idx === 2) {
      location.x = 51.3;
      location.y = 55.5;
      return [location.x, location.y];
    }
    return [location.x, location.y];
  };

  const RuneLocation = (idx_x: number, idx_y: number): number[] => {
    if (idx_x === 0) {
      if (idx_y === 0) {
        location.x = 14.4;
        location.y = 24.3;
        return [location.x, location.y];
      }
      if (idx_y === 1) {
        location.x = 7.4;
        location.y = 46.2;
        return [location.x, location.y];
      }
      if (idx_y === 2) {
        location.x = 14.4;
        location.y = 68;
        return [location.x, location.y];
      }
    } else if (idx_x === 1) {
      if (idx_y === 0) {
        location.x = 43.8;
        location.y = 7.8;
        return [location.x, location.y];
      }
      if (idx_y === 1) {
        location.x = 65.9;
        location.y = 12.2;
        return [location.x, location.y];
      }
      if (idx_y === 2) {
        location.x = 81.3;
        location.y = 29.2;
        return [location.x, location.y];
      }
    } else {
      if (idx_y === 0) {
        location.x = 81.3;
        location.y = 63.2;
        return [location.x, location.y];
      }
      if (idx_y === 1) {
        location.x = 65.9;
        location.y = 80.2;
        return [location.x, location.y];
      }
      if (idx_y === 2) {
        location.x = 43.8;
        location.y = 84.6;
        return [location.x, location.y];
      }
    }

    return [location.x, location.y];
  };

  const GemLocation = (idx: number): number[] => {
    if (idx === 0) {
      location.x = 76.2;
      location.y = 20.9;
      return [location.x, location.y];
    }
    if (idx === 1) {
      location.x = 88;
      location.y = 36.4;
      return [location.x, location.y];
    }
    if (idx === 2) {
      location.x = 88;
      location.y = 55.9;
      return [location.x, location.y];
    }
    if (idx === 3) {
      location.x = 76.2;
      location.y = 71.4;
      return [location.x, location.y];
    }
    return [location.x, location.y];
  };

  return {
    TalismanLocation,
    RuneLocation,
    GemLocation,
  };
};

export default useItemImageLocation;
