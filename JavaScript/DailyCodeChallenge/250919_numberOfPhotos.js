function numberOfPhotos(photoSizeMb, hardDriveSizeGb) {

  const photos = Math.floor((hardDriveSizeGb*1000)/photoSizeMb)

  console.log(photos)

  return photos;
}

numberOfPhotos(3.5, 5.5)



///OLD CODE///
function numberOfPhotos(photoSizeMb, hardDriveSizeGb) {

  const driveCap = hardDriveSizeGb * 1000

    const totalPhotos = Math.floor(driveCap / photoSizeMb)
    console.log(totalPhotos)

    return totalPhotos;
    }


numberOfPhotos(1, 1)
numberOfPhotos(2, 1)
numberOfPhotos(4, 256)
numberOfPhotos(3.5, 750)


/*
Photo Storage
Given a photo size in megabytes (MB), and hard drive capacity in gigabytes (GB), return the number of photos the hard drive can store using the following constraints:

1 gigabyte equals 1000 megabytes.
Return the number of whole photos the drive can store.
*/

/*
Photo Storage
Given a photo size in megabytes (MB), and hard drive capacity in gigabytes (GB), return the number of photos the hard drive can store using the following constraints:

1 gigabyte equals 1000 megabytes.
Return the number of whole photos the drive can store.

Tests
Passed:1. numberOfPhotos(1, 1) should return 1000.
Passed:2. numberOfPhotos(2, 1) should return 500.
Passed:3. numberOfPhotos(4, 256) should return 64000.
Passed:4. numberOfPhotos(3.5, 750) should return 214285.
Passed:5. numberOfPhotos(3.5, 5.5) should return 1571.
*/