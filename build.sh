if [ $# -eq 1 ]
  then
    echo "Uploading Resouces"
	gh release create $1 -F change.log binaries.zip
fi