import React from "react";

import {
  AddUserIcon,
  AreaChartIcon,
  AroundTheGlobeIcon,
  BicycleIcon,
  BoardingPassIcon,
  BusIcon,
  CalendarIcon,
  CarRoofBoxIcon,
  CarryOnLuggageIcon,
  ClockIcon,
  ComplaintIcon,
  CompressIcon,
  CountryIcon,
  DayAndNightIcon,
  DiningIcon,
  DirtBikeIcon,
  DoneIcon,
  DoubleTickIcon,
  DownloadIcon,
  FileIcon,
  FinishFlagIcon,
  FlagIcon,
  FoldedBookletIcon,
  FoodIcon,
  ForestIcon,
  GalleryIcon,
  GoIcon,
  GroupIcon,
  HeartWithPulseIcon,
  HelpIcon,
  HorsebackRidingIcon,
  HotelBedIcon,
  InfoIcon,
  JourneyIcon,
  LakeIcon,
  LayersIcon,
  MapIcon,
  MapPinpointIcon,
  MedicalIcon,
  MessagingIcon,
  MissionIcon,
  MoonSymbolIcon,
  MountainBikingIcon,
  NextLocationIcon,
  ParkingIcon,
  PassportIcon,
  PathIcon,
  PickupFrontViewIcon,
  PlaneIcon,
  PublicSafetyIcon,
  RoadIcon,
  RulesBookIcon,
  SafeOkIcon,
  ShuttleBusIcon,
  SignpostIcon,
  SingleBedIcon,
  SkiingIcon,
  SpeechBubbleIcon,
  StandingManIcon,
  StarHalfEmptyIcon,
  StarIcon,
  SuitcaseIcon,
  SunIcon,
  TranslationIcon,
  TransportationIcon,
  TrekkingIcon,
  WalkingIcon,
  WorldMapIcon,
} from "../icons";

const icons = [
  {
    name: "Add User",
    component: <AddUserIcon />,
    tags: ["Add User", "Benutzer Hinzufügen", "User", "Benutzer"],
  },
  {
    name: "Altitude difference",
    component: <AreaChartIcon />,
    tags: ["Höhenmeter", "Anstieg", "Elevation", "Ascent"],
  },
  {
    name: "Around The Globe",
    component: <AroundTheGlobeIcon />,
    tags: ["Around The Globe", "Weltweit", "Globus", "Globe"],
  },
  {
    name: "Bicycle",
    component: <BicycleIcon />,
    tags: ["Bicycle Stages", "Cycling", "Fahrrad Etappen", "Radfahren"],
  },
  {
    name: "Boarding Pass",
    component: <BoardingPassIcon />,
    tags: ["Boarding Pass", "Boarding", "Pass", "Boarding Pass"],
  },
  {
    name: "Bus",
    component: <BusIcon />,
    tags: ["Bus", "Bus", "Transport", "Transportation"],
  },
  {
    name: "Calendar",
    component: <CalendarIcon />,
    tags: ["Reisetage", "Calendar", "Travel Days"],
  },
  {
    name: "Car Roof Box",
    component: <CarRoofBoxIcon />,
    tags: ["Car Roof Box", "Dachbox", "Car", "Auto"],
  },
  {
    name: "Carry",
    component: <CarryOnLuggageIcon />,
    tags: ["Carry", "Carry On Luggage", "Handgepäck", "Carry On"],
  },
  {
    name: "Clock",
    component: <ClockIcon />,
    tags: ["Clock", "Uhr", "Zeit", "Time"],
  },
  {
    name: "Complaint",
    component: <ComplaintIcon />,
    tags: ["Complaint", "Beschwerde", "Reklamation"],
  },
  {
    name: "Compress",
    component: <CompressIcon />,
    tags: ["Compress", "Komprimieren", "Zip", "Packen"],
  },
  {
    name: "Country",
    component: <CountryIcon />,
    tags: ["Country", "Land"],
  },
  {
    name: "Day And Night",
    component: <DayAndNightIcon />,
    tags: ["Day And Night", "Tag Und Nacht", "Day", "Night"],
  },
  {
    name: "Dining",
    component: <DiningIcon />,
    tags: ["Dining", "Essen", "Restaurant", "Food"],
  },
  {
    name: "Bike",
    component: <DirtBikeIcon />,
    tags: ["Dirt Bike", "Dirt Bike", "Motorrad", "Motorcycle", "Bike"],
  },
  {
    name: "Done",
    component: <DoneIcon />,
    tags: ["Done", "Erledigt", "Check", "Checkmark"],
  },
  {
    name: "Double Tick",
    component: <DoubleTickIcon />,
    tags: ["Double Tick", "Doppelhaken", "Check", "Checkmark"],
  },
  {
    name: "Download",
    component: <DownloadIcon />,
    tags: ["Download", "Herunterladen"],
  },
  {
    name: "File",
    component: <FileIcon />,
    tags: ["File", "Datei", "Document", "Dokument"],
  },
  {
    name: "Finish Flag",
    component: <FinishFlagIcon />,
    tags: ["Finish Flag", "Zielflagge", "Finish", "Ziel"],
  },
  {
    name: "Flag",
    component: <FlagIcon />,
    tags: ["Flag", "Flagge"],
  },
  {
    name: "Booklet",
    component: <FoldedBookletIcon />,
    tags: ["Booklet", "Buklet", "Folded", "Folded Booklet"],
  },
  {
    name: "Food",
    component: <FoodIcon />,
    tags: ["Food", "Essen", "Restaurant"],
  },
  {
    name: "Forest",
    component: <ForestIcon />,
    tags: ["Forest", "Wald", "Nature", "Natur"],
  },
  {
    name: "Gallery",
    component: <GalleryIcon />,
    tags: ["Gallery", "Galerie", "Photos", "Bilder"],
  },
  {
    name: "Go",
    component: <GoIcon />,
    tags: ["Go", "Los", "Start"],
  },
  {
    name: "Group",
    component: <GroupIcon />,
    tags: ["Group", "Gruppe", "Team"],
  },
  {
    name: "Heart With Pulse",
    component: <HeartWithPulseIcon />,
    tags: ["Cardio", "Pulse", "Kardio"],
  },
  {
    name: "Help",
    component: <HelpIcon />,
    tags: ["Help", "Hilfe", "Question", "Frage"],
  },
  {
    name: "Horseback Riding",
    component: <HorsebackRidingIcon />,
    tags: ["Horseback Riding", "Reiten", "Horse", "Pferd"],
  },
  {
    name: "Hotel Bed",
    component: <HotelBedIcon />,
    tags: ["Hotel", "Room", "Zimmer", "Bed", "Bett"],
  },
  {
    name: "Info",
    component: <InfoIcon />,
    tags: ["Info", "Information", "Help", "Hilfe"],
  },
  {
    name: "Journey",
    component: <JourneyIcon />,
    tags: ["Journey", "Reise", "Travel", "Reisen"],
  },
  {
    name: "Lake",
    component: <LakeIcon />,
    tags: ["Lake", "See", "Water", "Wasser"],
  },
  {
    name: "Layers",
    component: <LayersIcon />,
    tags: ["Layers", "Ebenen", "Layer", "Ebene"],
  },
  {
    name: "Map",
    component: <MapIcon />,
    tags: ["Map", "Karte", "Karte"],
  },
  {
    name: "Map Pinpoint",
    component: <MapPinpointIcon />,
    tags: ["Map Pinpoint", "Karte", "Map", "Pinpoint"],
  },
  {
    name: "Medical",
    component: <MedicalIcon />,
    tags: ["Medical", "Medizin", "Health", "Gesundheit"],
  },
  {
    name: "Messaging",
    component: <MessagingIcon />,
    tags: ["Messaging", "Nachrichten", "Chat", "Message"],
  },
  {
    name: "Mission",
    component: <MissionIcon />,
    tags: ["Mission", "Auftrag", "Task", "Mission"],
  },
  {
    name: "Moon",
    component: <MoonSymbolIcon />,
    tags: ["Moon", "Mond", "Night", "Nacht"],
  },
  {
    name: "Mountain Biking",
    component: <MountainBikingIcon />,
    tags: ["Mountain Biking", "Mountain", "Biking", "Biking"],
  },
  {
    name: "Next Location",
    component: <NextLocationIcon />,
    tags: ["Next Location", "Nächster Ort", "Next", "Location"],
  },
  {
    name: "Parking",
    component: <ParkingIcon />,
    tags: ["Parking", "Parken", "Parking", "Parken"],
  },
  {
    name: "Passport",
    component: <PassportIcon />,
    tags: ["Passport", "Reisepass", "Travel", "Reisen"],
  },
  {
    name: "Path",
    component: <PathIcon />,
    tags: ["Path", "Weg", "Path", "Weg"],
  },
  {
    name: "Pickup Front View",
    component: <PickupFrontViewIcon />,
    tags: ["Pickup Front View", "Pickup", "Front View", "Pickup"],
  },
  {
    name: "Plane",
    component: <PlaneIcon />,
    tags: ["Plane", "Flugzeug", "Aircraft", "Flugzeug"],
  },
  {
    name: "Public Safety",
    component: <PublicSafetyIcon />,
    tags: ["Public Safety", "Sicherheit", "Safety", "Public"],
  },
  {
    name: "Road",
    component: <RoadIcon />,
    tags: ["Road", "Straße", "Road", "Straße"],
  },
  {
    name: "Rules Book",
    component: <RulesBookIcon />,
    tags: ["Buklet", "Regeln", "Rules", "Book"],
  },
  {
    name: "Safe Ok",
    component: <SafeOkIcon />,
    tags: ["Safe Ok", "Sicher", "Safe", "Ok"],
  },
  {
    name: "Shuttle Bus",
    component: <ShuttleBusIcon />,
    tags: ["Bus", "Shuttle", "Bus", "Shuttle"],
  },
  {
    name: "Signpost",
    component: <SignpostIcon />,
    tags: ["Signpost", "Wegweiser", "Direction", "Richtung"],
  },
  {
    name: "Single Bed",
    component: <SingleBedIcon />,
    tags: [
      "Single Bed",
      "Einzelbett",
      "Bed",
      "Bett",
      "room",
      "Zimmer",
      "Hotel",
    ],
  },
  {
    name: "Skiing",
    component: <SkiingIcon />,
    tags: ["Skiing", "Ski", "Skiing", "Ski"],
  },
  {
    name: "Speech Bubble",
    component: <SpeechBubbleIcon />,
    tags: ["Speech Bubble", "Sprechblase", "Chat", "Message"],
  },
  {
    name: "Standing Man",
    component: <StandingManIcon />,
    tags: ["Standing Man", "Mann Steht", "Standing", "Steht"],
  },
  {
    name: "Star Empty",
    component: <StarHalfEmptyIcon />,
    tags: ["Star Empty", "Stern", "Rating", "Bewertung"],
  },
  {
    name: "Star",
    component: <StarIcon />,
    tags: ["Star", "Stern", "Rating", "Bewertung"],
  },
  {
    name: "Suitcase",
    component: <SuitcaseIcon />,
    tags: ["Suitcase", "Koffer", "Reise", "Travel"],
  },
  {
    name: "Sun",
    component: <SunIcon />,
    tags: ["Sun", "Sonne", "Weather", "Wetter"],
  },
  {
    name: "Translation",
    component: <TranslationIcon />,
    tags: ["Translation", "Übersetzung", "Language", "Sprache"],
  },
  {
    name: "Transportation",
    component: <TransportationIcon />,
    tags: ["Transportation", "Transport"],
  },
  {
    name: "Trekking",
    component: <TrekkingIcon />,
    tags: ["Trekking", "Hiking", "Wandern", "Trekking"],
  },
  {
    name: "Walking",
    component: <WalkingIcon />,
    tags: ["Walking", "Gehen", "Walking", "Gehen"],
  },
  {
    name: "World Map",
    component: <WorldMapIcon />,
    tags: ["World Map", "Weltkarte", "Map", "Karte"],
  },
];

export default icons;
