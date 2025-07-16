import Card from "../components/Card";

const CardGrid = () => {
  const handleToggleFavorite = (id: string) => {
    console.log(`Toggled favorite for anime with ID: ${id}`);
    // Save to localStorage or context here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card
          id="1"
          title="Attack on Titan"
          description="After his hometown is destroyed and his mother is killed, young Eren Yeager joins the Survey Corps to fight the monstrous Titans."
          imageUrl="https://upload.wikimedia.org/wikipedia/en/7/7e/Shingeki_no_Kyojin_manga_volume_1.jpg"
          onToggleFavorite={handleToggleFavorite}
        />
        <Card
          id="2"
          title="My Hero Academia"
          description="In a world where nearly every human has superpowers, a boy born without them still dreams of becoming a hero."
          imageUrl="https://upload.wikimedia.org/wikipedia/en/8/8c/My_Hero_Academia_volume_1_cover.jpg"
          onToggleFavorite={handleToggleFavorite}
        />
        {/* You can add more <Card /> components here */}
      </div>
    </div>
  );
};

export default CardGrid;
