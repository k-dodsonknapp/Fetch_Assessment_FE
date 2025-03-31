import React, { useEffect, useState } from "react";
import { Command, CommandInput } from "../ui/command";
import useFetch from "../../hooks/useFetch";
import { Card } from "../ui/card";
import Button from "../ui/Button";
import formatBreedNames from "../../utils/formatters";

function Home() {
  const [breeds, setBreeds] = useState([].fill(0, 8));
  const [{ data: breedData, loading, error }, submitDogListParams] = useFetch();
  const [_, setSelectedBreed] = useState([]);

  useEffect(() => {
    if (breedData) {
      const formattedBreedData = formatBreedNames(breedData);
      setBreeds(formattedBreedData);
      localStorage.setItem("breeds", JSON.stringify(breedData));
    } else if (localStorage.getItem("breeds")) {
      const formattedBreedDataLocalStorage = formatBreedNames(
        JSON.parse(localStorage.getItem("breeds"))
      );
      setBreeds(formattedBreedDataLocalStorage);
    }
  }, [breedData]);

  const [disappearingBreed, setDisappearingBreed] = useState([]);

  function handleSelection(breed) {
    setDisappearingBreed((prev) => [...prev, breed.name]);
    setTimeout(() => {
      setSelectedBreed((prev) => {
        const index = prev.findIndex((item) => item.name === breed.name);
        return index !== -1
          ? prev.toSpliced(index, 1)
          : [...prev, { ...breed, selected: true }];
      });
      setBreeds((prev) => {
        const removedBreed = prev.splice(prev.indexOf(breed), 1);
        return [...prev, removedBreed[0]];
      });
      setDisappearingBreed((prev) =>
        prev.filter((item) => item !== breed.name)
      );
    }, 500);
  }

  return (
    <div className="flex items-center justify-center flex-col gap-4 p-4">
      <Card className="flex justify-center w-full max-w-7xl h-96 bg-primary-foreground">
        <Command className="flex justify-center w-full max-w-7xl h-22 rounded-none bg-primary-foreground text-card-foreground ring-bottom-2 border-b-4">
          <CommandInput className="flex border-none" placeholder="Search..." />
        </Command>
        <div className="flex items-center justify-center align-middle w-auto border-2 border-dashed rounded-lg">
          <div className="flex flex-wrap gap-x-6 gap-y-4 w-[85%]">
            {breeds.map(
              (breed, index) =>
                index <= 9 && (
                  <div key={index} className="flex justify-start w-fit">
                    <Button
                      key={`${index}`}
                      className={`flex justify-start w-fit transition-opacity duration-500 transform ${
                        disappearingBreed.includes(breed.name)
                          ? "opacity-0 scale-95"
                          : "opacity-100 scale-100"
                      }`}
                      onClick={() => handleSelection(breed)}
                    >
                      {breed.name}
                    </Button>
                  </div>
                )
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Home;
