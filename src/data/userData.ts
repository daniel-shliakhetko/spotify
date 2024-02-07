import { ListItemProps, LibraryListItemType } from "../sections/Library/LibraryItem";

export const library: ListItemProps[] = [
    {
      title: "PLAYLIST OOOH YEAH",
      type: LibraryListItemType.PLAYLIST,
      id: "1",
      owner: "Your dad",
      image:
        "https://media.istockphoto.com/id/1166608662/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B8%D0%B9-%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD-%D1%96%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D1%96%D1%97-wolf-designs.jpg?s=612x612&w=0&k=20&c=yts_svpARjtum1RoNS1AAjUv4BfIfxtfD4fM3qAvrOs=",
    },
    {
      title: "Performer",
      type: LibraryListItemType.ARTIST,
      id: "2",
      image:
        "https://media.istockphoto.com/id/1272809601/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D1%82%D0%B0%D0%BB%D1%96%D1%81%D0%BC%D0%B0%D0%BD-%D1%87%D0%B5%D1%80%D0%B2%D0%BE%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B3%D0%BE-%D0%B1%D0%B8%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=dBaWeqUiEJw1GZ34XkBIjQr7McwVFqMJae0w0iIjxVg=",
    },
    {
      title: "Folder",
      type: LibraryListItemType.FOLDER,
      contents: [
        {
          title: "PLAYLIST OOOH YEAH",
          type: LibraryListItemType.PLAYLIST,
          owner: "Your dad",
          id: "3",
          image:
            "https://media.istockphoto.com/id/1166608662/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B8%D0%B9-%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD-%D1%96%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D1%96%D1%97-wolf-designs.jpg?s=612x612&w=0&k=20&c=yts_svpARjtum1RoNS1AAjUv4BfIfxtfD4fM3qAvrOs=",
        },
        {
          title: "Performer",
          type: LibraryListItemType.PLAYLIST,
          owner: "Your mama",
          id: "4",
          image:
            "https://media.istockphoto.com/id/1272809601/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D1%82%D0%B0%D0%BB%D1%96%D1%81%D0%BC%D0%B0%D0%BD-%D1%87%D0%B5%D1%80%D0%B2%D0%BE%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B3%D0%BE-%D0%B1%D0%B8%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=dBaWeqUiEJw1GZ34XkBIjQr7McwVFqMJae0w0iIjxVg=",
        },
      ],
    },
  ];