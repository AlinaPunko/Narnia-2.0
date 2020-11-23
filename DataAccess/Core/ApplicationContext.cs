using DataAccess.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using System;

namespace DataAccess.Core
{
    public sealed class ApplicationContext : IdentityDbContext<User>
    {
        public DbSet<Book> Books { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Rate> Rates { get; set; }

        public ApplicationContext(DbContextOptions options) : base(options)
        {
            if (!Database.CanConnect())
            {
                Database.Migrate();
            }
        }

        private IDbContextTransaction transaction;

        public void BeginTransaction()
        {
            transaction = Database.BeginTransaction();
        }

        public void Commit()
        {
            try
            {
                SaveChanges();
                transaction.Commit();
            }
            finally
            {
                transaction.Dispose();
            }
        }

        public void Rollback()
        {
            transaction.Rollback();
            transaction.Dispose();
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<FavoriteBook>()
                .HasKey(t => new { t.UserId, t.BookId });

            builder.Entity<BookToGenre>()
                .HasKey(p => new { p.BookId, p.Genre });

            builder.Entity<FavoriteBook>()
                .HasOne(b => b.Book)
                .WithMany(f => f.FavoriteBooks)
                .HasForeignKey(b => b.BookId);

            builder.Entity<FavoriteBook>()
                .HasOne(u => u.User)
                .WithMany(f => f.FavoriteBooks)
                .HasForeignKey(u => u.UserId);

            builder.Entity<OrderToBook>()
                .HasKey(b => new { b.BookId, b.OrderId });

            builder.Entity<OrderToBook>()
                .HasOne(b => b.Order)
                .WithMany(b => b.OrderToBooks)
                .HasForeignKey(b => b.OrderId);

            builder.Entity<OrderToBook>()
                .HasOne(b => b.Book)
                .WithMany(b => b.OrderToBooks)
                .HasForeignKey(b => b.BookId);

            builder.Entity<BookToAuthor>()
                .HasKey(b => new { b.BookId, b.AuthorId });

            builder.Entity<BookToAuthor>()
                .HasOne(b => b.Book)
                .WithMany(b => b.BookToAuthors)
                .HasForeignKey(b => b.BookId);

            builder.Entity<OrderToBook>()
                .HasOne(b => b.Order)
                .WithMany(b => b.OrderToBooks)
                .HasForeignKey(b => b.OrderId);

            AddData(builder);
        }

        private void AddData(ModelBuilder builder)
        {
            builder.Entity<Author>().HasData(
                new Author() { Id = 1, Name = "J.K. Rowling", Country = "Great Britain", Birthdate = new DateTime(1965, 7, 31) },
                new Author() { Id = 2, Name = "Stephen King", Country = "USA", Birthdate = new DateTime(1947, 9, 21) },
                new Author() { Id = 3, Name = "William Shakespeare", Country = "Great Britain", Birthdate = new DateTime(1564, 4, 26) },
                new Author() { Id = 4, Name = "Agatha Cristie", Country = "Great Britain", Birthdate = new DateTime(1890, 9, 15) },
                new Author() { Id = 5, Name = "Arthur Conan Doyle", Country = "Great Britain", Birthdate = new DateTime(1859, 5, 22) },
                new Author() { Id = 6, Name = "George R.R. Martin", Country = "USA", Birthdate = new DateTime(1948, 9, 20) },
                new Author() { Id = 7, Name = "George Orwell", Country = "Great Britain", Birthdate = new DateTime(1903, 5, 26) }
            );

            builder.Entity<Book>().HasData(
                new Book() { Id = 1, Title = "Harry Potter and the Philosopher's Stone", Description = "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, Harry faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old.", Count = 20, Price = 26.18F, PublishingYear = 1997, PagesCount = 432, Rating = 0 },
                new Book() { Id = 2, Title = "Harry Potter and the Chamber of Secrets", Description = "Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the 'Chamber of Secrets' has been opened and that the 'heir of Slytherin' would kill all pupils who do not come from all-magical families. These threats are found after attacks that leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks.", PagesCount = 480, PublishingYear = 1998, Price = 26.18F, Count = 20, Rating = 0 },
                new Book() { Id = 3, Title = "Harry Potter and the Prisoner of Azkaban", Description = "Harry Potter and the Prisoner of Azkaban is a fantasy novel written by British author J.K. Rowling and is the third in the Harry Potter series. The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry. Along with friends Ronald Weasley and Hermione Granger, Harry investigates Sirius Black, an escaped prisoner from Azkaban, the wizard prison, believed to be one of Lord Voldemort's old allies.", Count = 20, Price = 24.70F, PublishingYear = 1999, PagesCount = 528 },
                new Book() { Id = 4, Title = "Harry Potter and the Goblet of Fire", Description = "Harry Potter and the Goblet of Fire is a fantasy book written by British author J. K. Rowling and the fourth novel in the Harry Potter series. It follows Harry Potter, a wizard in his fourth year at Hogwarts School of Witchcraft and Wizardry, and the mystery surrounding the entry of Harry's name into the Triwizard Tournament, in which he is forced to compete.", PublishingYear = 2000, PagesCount = 704, Price = 29.91F, Count = 20, Rating = 0 },
                new Book() { Id = 5, Title = "Harry Potter and the Order of the Phoenix", Description = "Harry Potter and the Order of the Phoenix is a fantasy novel written by British author J. K. Rowling and the fifth novel in the Harry Potter series. It follows Harry Potter's struggles through his fifth year at Hogwarts School of Witchcraft and Wizardry, including the surreptitious return of the antagonist Lord Voldemort, O.W.L. exams, and an obstructive Ministry of Magic. The novel was published on 21 June 2003 by Bloomsbury in the United Kingdom, Scholastic in the United States, and Raincoast in Canada. It sold five million copies in the first 24 hours of publication.[1] It is the longest book of the series.", Count = 20, Price = 33.35F, PagesCount = 892, PublishingYear = 2003, Rating = 0 },
                new Book() { Id = 6, Title = "Harry Potter and the Half - Blood Prince", Description = "Harry Potter and the Half-Blood Prince is a fantasy novel written by British author J.K. Rowling and the sixth and penultimate novel in the Harry Potter series. Set during Harry Potter's sixth year at Hogwarts, the novel explores the past of Harry's nemesis, Lord Voldemort, and Harry's preparations for the final battle against Voldemort alongside his headmaster and mentor Albus Dumbledore.", PublishingYear = 2005, PagesCount = 672, Price = 29.82F, Count = 20, Rating = 0 },
                new Book() { Id = 7, Title = "Harry Potter and the Deathly Hallows", Description = "Harry Potter and the Deathly Hallows is a fantasy novel written by British author J. K. Rowling and the seventh and final novel of the Harry Potter series. It was released on 21 July 2007 in the United Kingdom by Bloomsbury Publishing, in the United States by Scholastic, and in Canada by Raincoast Books. The novel chronicles the events directly following Harry Potter and the Half-Blood Prince (2005) and the final confrontation between the wizards Harry Potter and Lord Voldemort.", Count = 20, Price = 28.68F, PagesCount = 704, PublishingYear = 2007 },
                new Book() { Id = 8, Title = "IT", Description = "It is a 1986 horror novel by American author Stephen King. It was his 22nd book, and his 17th novel written under his own name. The story follows the experiences of seven children as they are terrorized by an evil entity that exploits the fears of its victims to disguise itself while hunting its prey. 'It' primarily appears in the form of Pennywise the Dancing Clown to attract its preferred prey of young children.", PagesCount = 1245, Count = 20, Price = 24.78F, PublishingYear = 1986, Rating = 0 },
                new Book() { Id = 9, Title = "Carrie", Description = "Carrie is an epistolary horror novel by American author Stephen King. It was his first published novel, released on April 5, 1974, with an approximate first print-run of 30,000 copies.[1] Set primarily in the then-future year of 1979, it revolves around the eponymous Carrie White, an unpopular friendless misfit and bullied high-school girl from an abusive religious household who uses her newly discovered telekinetic powers to exact revenge on those who torment her. During the process, she causes one of the worst local disasters the town has ever had. King has commented that he finds the work to be 'raw' and 'with a surprising power to hurt and horrify.' It is one of the most frequently banned books in United States schools.[2] Much of the book uses newspaper clippings, magazine articles, letters, and excerpts from books to tell how Carrie destroyed the fictional town of Chamberlain, Maine while exacting revenge on her sadistic classmates and her own mother Margaret.", Count = 20, Rating = 0, PublishingYear = 1974, Price = 15.65F, PagesCount = 320 },
                new Book() { Id = 10, Title = "Romeo and Juliet", Description = "Romeo and Juliet is a tragedy written by William Shakespeare early in his career about two young star-crossed lovers whose deaths ultimately reconcile their feuding families. It was among Shakespeare's most popular plays during his lifetime and along with Hamlet, is one of his most frequently performed plays. Today, the title characters are regarded as archetypal young lovers.", PagesCount = 192, PublishingYear = 1597, Price = 7.43F, Rating = 0, Count = 20 },
                new Book() { Id = 11, Title = "Hamlet", Count = 20, Price = 7.45F, Rating = 0, PublishingYear = 1601, PagesCount = 224, Description = "The Tragedy of Hamlet, Prince of Denmark, often shortened to Hamlet, is a tragedy written by William Shakespeare sometime between 1599 and 1601. It is Shakespeare's longest play with 30,557 words. Set in Denmark, the play depicts Prince Hamlet and his revenge against his uncle, Claudius, who has murdered Hamlet's father in order to seize his throne and marry Hamlet's mother." },
                new Book() { Id = 12, Title = "Poirot Investigates", Count = 20, Rating = 0, Description = "Poirot Investigates is a short story collection written by Agatha Christie and first published in the UK by The Bodley Head in March 1924. In the eleven stories, famed eccentric detective Hercule Poirot solves a variety of mysteries involving greed, jealousy, and revenge. The American version of this book, published by Dodd, Mead and Company in 1925, featured a further three stories.[3] The UK first edition featured an illustration of Poirot on the dust jacket by W. Smithson Broadhead, reprinted from the 21 March 1923 issue of The Sketch magazine.", Price = 26.30F, PagesCount = 480, PublishingYear = 1924 },
                new Book() { Id = 13, Title = "Murder on the Orient Express", Count = 20, Rating = 0, PublishingYear = 1934, PagesCount = 256, Price = 9.98F, Description = "Murder on the Orient Express is a detective novel by English writer Agatha Christie featuring the Belgian detective Hercule Poirot. It was first published in the United Kingdom by the Collins Crime Club onGenre.Adventure January 1934. In the United States, it was published on 28 February 1934,[1][2] under the title of Murder in the Calais Coach, by Dodd, Mead and Company. The UK edition retailed at seven shillings and sixpence (7/6) and the US edition at $2." },
                new Book() { Id = 14, Title = "And Then There Were None", Price = 9.98F, Count = 20, Rating = 0, Description = "And Then There Were None is a mystery novel by English writer Agatha Christie, described by her as the most difficult of her books to write.[2] It was first published in the United Kingdom by the Collins Crime Club on 6 November 1939, as Ten Little Niggers,after the minstrel song, which serves as a major plot point.        The US edition was released in January 1940 with the title And Then There Were None, which is taken from the last five words of the song. All successive American reprints and adaptations use that title, except for the Pocket Books paperbacks published between 1964 and 1986, which appeared under the title Ten Little Indians.The book is the world's best-selling mystery, and with over 100 million copies sold is one of the best-selling books of all time. Publications International lists the novel as the sixth best-selling title.", PagesCount = 256, PublishingYear = 1939 },
                new Book() { Id = 15, Title = "The Adventures of Sherlock Holmes", Price = 8.16F, Rating = 0, PublishingYear = 1927, PagesCount = 448, Count = 20, Description = "The Adventures of Sherlock Holmes is a collection of twelve short stories by Arthur Conan Doyle, first published on 14 October 1892. It contains the earliest short stories featuring the consulting detective Sherlock Holmes, which had been published in twelve monthly issues of The Strand Magazine from July 1891 to June 1892. The stories are collected in the same sequence, which is not supported by any fictional chronology. The only characters common to all twelve are Holmes and Dr. Watson and all are related in first-person narrative from Watson's point of view." },
                new Book() { Id = 16, Title = "Game of thrones", Count = 20, PagesCount = 770, Price = 35.94F, PublishingYear = 1996, Rating = 0, Description = "A Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by the American author George R. R. Martin. It was first published on August 1, 1996. The novel won the 1997 Locus Award[2] and was nominated for both the 1997 Nebula Award[2] and the 1997 World Fantasy Award.[3] The novella Blood of the Dragon, comprising the Daenerys Targaryen chapters from the novel, won the 1997 Hugo Award for Best Novella. In January 2011, the novel became a New York Times Bestseller[4] and reached No.Genre.Adventure on the list in July 2011.[5]" },
                new Book() { Id = 17, Title = "1984", Count = 20, Price = 11.60F, PagesCount = 320, Rating = 0, PublishingYear = 1949, Description = "Nineteen Eighty-Four: A Novel, often published as 1984, is a dystopian novel by English novelist George Orwell. It was published in June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime. The story was mostly written at Barnhill, a farmhouse on the Scottish island of Jura, at times while Orwell suffered from severe tuberculosis. Thematically, Nineteen Eighty-Four centres on the consequences of government over-reach, totalitarianism, mass surveillance, and repressive regimentation of all persons and behaviours within society." },
                new Book() { Id = 18, Title = "Animal farm", Count = 20, Rating = 0, Description = "Animal Farm is an allegorical novella by George Orwell, first published in England on 17 August 1945.[1][2] The book tells the story of a group of farm animals who rebel against their human farmer, hoping to create a society where the animals can be equal, free, and happy. Ultimately, however, the rebellion is betrayed and the farm ends up in a state as bad as it was before, under the dictatorship of a pig named Napoleon.", PublishingYear = 1945, Price = 9.81F, PagesCount = 122 }
                );

            builder.Entity<BookToGenre>().HasData(
                new BookToGenre() { BookId = 1, Genre = Genre.Adventure },
                new BookToGenre() { BookId = 1, Genre = Genre.FairyTale },
                new BookToGenre() { BookId = 1, Genre = Genre.Fantasy },
                new BookToGenre() { BookId = 2, Genre = Genre.Adventure },
                new BookToGenre() { BookId = 2, Genre = Genre.FairyTale },
                new BookToGenre() { BookId = 2, Genre = Genre.Fantasy },
                new BookToGenre() { BookId = 3, Genre = Genre.Adventure },
                new BookToGenre() { BookId = 3, Genre = Genre.FairyTale },
                new BookToGenre() { BookId = 3, Genre = Genre.Fantasy },
                new BookToGenre() { BookId = 4, Genre = Genre.Adventure },
                new BookToGenre() { BookId = 4, Genre = Genre.FairyTale },
                new BookToGenre() { BookId = 4, Genre = Genre.Fantasy },
                new BookToGenre() { BookId = 5, Genre = Genre.Adventure },
                new BookToGenre() { BookId = 5, Genre = Genre.FairyTale },
                new BookToGenre() { BookId = 5, Genre = Genre.Fantasy },
                new BookToGenre() { BookId = 6, Genre = Genre.Adventure },
                new BookToGenre() { BookId = 6, Genre = Genre.FairyTale },
                new BookToGenre() { BookId = 6, Genre = Genre.Fantasy },
                new BookToGenre() { BookId = 7, Genre = Genre.Adventure },
                new BookToGenre() { BookId = 7, Genre = Genre.FairyTale },
                new BookToGenre() { BookId = 7, Genre = Genre.Fantasy },
                new BookToGenre() { BookId = 8, Genre = Genre.Horror },
                new BookToGenre() { BookId = 9, Genre = Genre.Horror },
                new BookToGenre() { BookId = 10, Genre = Genre.Classic },
                new BookToGenre() { BookId = 10, Genre = Genre.Drama },
                new BookToGenre() { BookId = 10, Genre = Genre.Romance },
                new BookToGenre() { BookId = 11, Genre = Genre.Classic },
                new BookToGenre() { BookId = 11, Genre = Genre.Drama },
                new BookToGenre() { BookId = 11, Genre = Genre.Romance },
                new BookToGenre() { BookId = 12, Genre = Genre.Detective },
                new BookToGenre() { BookId = 13, Genre = Genre.Detective },
                new BookToGenre() { BookId = 14, Genre = Genre.Detective },
                new BookToGenre() { BookId = 15, Genre = Genre.Detective },
                new BookToGenre() { BookId = 15, Genre = Genre.Adventure },
                new BookToGenre() { BookId = 16, Genre = Genre.Adventure },
                new BookToGenre() { BookId = 16, Genre = Genre.Drama },
                new BookToGenre() { BookId = 16, Genre = Genre.Fantasy },
                new BookToGenre() { BookId = 17, Genre = Genre.Drama },
                new BookToGenre() { BookId = 17, Genre = Genre.SciFi },
                new BookToGenre() { BookId = 18, Genre = Genre.Drama },
                new BookToGenre() { BookId = 18, Genre = Genre.SciFi }
                );

            builder.Entity<BookToAuthor>().HasData(
                new BookToAuthor() { BookId = 1, AuthorId = 1 },
                new BookToAuthor() { BookId = 2, AuthorId = 1 },
                new BookToAuthor() { BookId = 3, AuthorId = 1 },
                new BookToAuthor() { BookId = 4, AuthorId = 1 },
                new BookToAuthor() { BookId = 5, AuthorId = 1 },
                new BookToAuthor() { BookId = 6, AuthorId = 1 },
                new BookToAuthor() { BookId = 7, AuthorId = 1 },
                new BookToAuthor() { BookId = 8, AuthorId = 2 },
                new BookToAuthor() { BookId = 9, AuthorId = 2 },
                new BookToAuthor() { BookId = 10, AuthorId = 3 },
                new BookToAuthor() { BookId = 11, AuthorId = 3 },
                new BookToAuthor() { BookId = 12, AuthorId = 4 },
                new BookToAuthor() { BookId = 13, AuthorId = 4 },
                new BookToAuthor() { BookId = 14, AuthorId = 4 },
                new BookToAuthor() { BookId = 15, AuthorId = 5 },
                new BookToAuthor() { BookId = 16, AuthorId = 6 },
                new BookToAuthor() { BookId = 17, AuthorId = 7 },
                new BookToAuthor() { BookId = 18, AuthorId = 7 }
             );
        }
    }
}
